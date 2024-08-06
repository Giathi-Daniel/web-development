import mysql.connector
from tkinter import *
from tkinter import messagebox

# Function to authenticate user
def authenticate(username, password):
    return username == "admin" and password == "shopkeeper"

# Function to create login window
def login_window():
    login_window = Tk()
    login_window.title("Login")

    # Function to handle login button click
    def login():
        user = username_entry.get()
        pwd = password_entry.get()
        if authenticate(user, pwd):
            login_window.destroy()
            main_window()  # Open main application window after successful login
        else:
            messagebox.showerror("Login Failed", "Invalid username or password")

    # Username label and entry
    username_label = Label(login_window, text="Username:")
    username_label.grid(row=0, column=0, padx=10, pady=10)
    username_entry = Entry(login_window)
    username_entry.grid(row=0, column=1, padx=10, pady=10)

    # Password label and entry
    password_label = Label(login_window, text="Password:")
    password_label.grid(row=1, column=0, padx=10, pady=10)
    password_entry = Entry(login_window, show="*")
    password_entry.grid(row=1, column=1, padx=10, pady=10)

    # Login button
    login_button = Button(login_window, text="Login", command=login)
    login_button.grid(row=2, column=0, columnspan=2, padx=10, pady=10)

    login_window.mainloop()

# Function to create main application window
def main_window():
    conn = mysql.connector.connect(
        host="localhost",
        database="shopkeeper",
        user="root",
        password=""
    )

    # Function to calculate profit
    def calculate_profit(selling_price, buying_price):
        return selling_price - buying_price

    # Function to add product
    def add_product():
        product_num = product_num_entry.get()
        product_name = product_name_entry.get()
        selling_price = float(selling_price_entry.get())
        buying_price = float(buying_price_entry.get())

        profit = calculate_profit(selling_price, buying_price)

        cursor = conn.cursor()
        insert_query = "INSERT INTO products (product_num, product_name, selling_price, buying_price) VALUES (%s, %s, %s, %s)"
        data = (product_num, product_name, selling_price, buying_price)
        cursor.execute(insert_query, data)
        conn.commit()

        messagebox.showinfo("Product Added", f"Product '{product_name}' added. Profit: ${profit:.2f}")

        # Clear entry fields after adding product
        product_num_entry.delete(0, END)
        product_name_entry.delete(0, END)
        selling_price_entry.delete(0, END)
        buying_price_entry.delete(0, END)

    # Function to show products and calculate grand profit
    def show_products_and_calculate_grand_profit():
        cursor = conn.cursor()
        select_query = "SELECT * FROM products"
        cursor.execute(select_query)
        rows = cursor.fetchall()

        grand_total_profit = 0

        # Clear existing product list
        product_list.delete(0, END)

        # Insert fetched products into product list and calculate profit
        for row in rows:
            product_list.insert(END, row)
            selling_price = row[2]  # assuming index 2 is selling_price in your query result
            buying_price = row[3]   # assuming index 3 is buying_price in your query result
            profit = calculate_profit(selling_price, buying_price)
            grand_total_profit += profit

        # Display grand total profit
        messagebox.showinfo("Grand Profit", f"Grand Total Profit: ${grand_total_profit:.2f}")

    # Create main application window
    main_window = Tk()
    main_window.title("Shopkeeper Application")

    # Labels and Entry fields for product details
    product_num_label = Label(main_window, text="Product Number:")
    product_num_label.grid(row=0, column=0, padx=10, pady=10)
    product_num_entry = Entry(main_window)
    product_num_entry.grid(row=0, column=1, padx=10, pady=10)

    product_name_label = Label(main_window, text="Product Name:")
    product_name_label.grid(row=1, column=0, padx=10, pady=10)
    product_name_entry = Entry(main_window)
    product_name_entry.grid(row=1, column=1, padx=10, pady=10)

    selling_price_label = Label(main_window, text="Selling Price:")
    selling_price_label.grid(row=2, column=0, padx=10, pady=10)
    selling_price_entry = Entry(main_window)
    selling_price_entry.grid(row=2, column=1, padx=10, pady=10)

    buying_price_label = Label(main_window, text="Buying Price:")
    buying_price_label.grid(row=3, column=0, padx=10, pady=10)
    buying_price_entry = Entry(main_window)
    buying_price_entry.grid(row=3, column=1, padx=10, pady=10)

    # Buttons to add product, show products, and calculate grand profit
    add_button = Button(main_window, text="Add Product", command=add_product)
    add_button.grid(row=4, column=0, columnspan=2, padx=10, pady=10)

    show_button = Button(main_window, text="Show Products", command=show_products_and_calculate_grand_profit)
    show_button.grid(row=5, column=0, columnspan=2, padx=10, pady=10)

    # Listbox to display products
    product_list = Listbox(main_window, height=10, width=70)
    product_list.grid(row=6, column=0, columnspan=2, padx=10, pady=10)

    main_window.mainloop()

# Start the application by calling the login window function
login_window()
