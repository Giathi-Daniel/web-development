# Name -> Daniel Giathi
# Date -> 06/15/2024
# Aim -> This program calculates the anual profit based on the projected total sales amount

#  Function to Calculate the anual profit
def calculateProfit(sales_amount):
    # Profit -> 32.5% of total sales
    profit_percentage = 0.325
    return sales_amount * profit_percentage


# Main function
def main():
    # Prompt user to enter the sales person's name
    salesPersonName = input("Enter Sales Person Name.: ")

    # Prompt user to enter the projected total sales amount
    totalSalesAmount = float(input("Enter Projected Total Sales Amount.: "))

    # Calculate the annual profit
    annual_profit = calculateProfit(totalSalesAmount)

    # Display the results
    print("\nSales Person Name :", salesPersonName)
    print("\nTotal Sales Amount : ${:.2f}".format(totalSalesAmount))
    print("\nAnnual Profit : ${:.2f}".format(annual_profit))

    # Run the main function
if __name__ == "__main__":
    main()