bikeapp_balance = 99
bank_balance = 1000

print(bikeapp_balance,bank_balance)

if(bikeapp_balance < 100):
    bikeapp_balance += 500
    bank_balance -= 500

print(bikeapp_balance,bank_balance)

# Python program to illustrate short hand if
i = 10
if i < 15: print("i is less than 15")


# python program to illustrate nested If statement

i = 10
if (i == 10):
  
    #  First if statement
    if (i < 15):
        print("i is smaller than 15")
        
    # Nested - if statement
    # Will only be executed if statement above
    # it is true
    if (i < 12):
        print("i is smaller than 12 too")
    else:
        print("i is greater than 15")
