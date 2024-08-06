class BankAccount:
    def __init__(self, account_number, balance, date_of_opening, customer_name):
        self.account_number = account_number
        self.balance = balance
        self.date_of_opening = date_of_opening
        self.customer_name = customer_name

    # Deposit money into the account
    def deposit(self, amount):
        self.balance += amount
        return f"Amount deposited: ${amount}"

    # Withdraw money from the account
    def withdraw(self, amount):
        if self.balance >= amount:
            self.balance -= amount
            return f"Amount withdrawn: ${amount}"
        else:
            return "Insufficient balance for withdrawal."

    # Check current balance
    def check_balance(self):
        return f"Current balance: ${self.balance}"

    # Display customer details
    def customer_details(self):
        details = f"Customer Name: {self.customer_name}\n"
        details += f"Account Number: {self.account_number}\n"
        details += f"Date of Opening: {self.date_of_opening}\n"
        details += f"Current Balance: ${self.balance}"
        return details

# Example usage:
account = BankAccount("123456", 1000, "2024-02-26", "John Doe")
print(account.check_balance())
print(account.deposit(500))
print(account.withdraw(10000))
print(account.check_balance())
print(account.customer_details())
