marks = int(input("Enter marks scored::" ))

if marks > 90 and marks <=100:
    grade = "A+"
elif marks > 80 and marks <=90:
    grade = "A"
elif marks > 70 and marks <=80:
    grade = "B"
elif marks > 60 and marks <=70:
    grade = "C"
elif marks > 50 and marks <=60:
    grade = "D"
elif marks > 40 and marks <=50:
    grade = "E"
elif marks > 0 and marks <=40:
    grade = "F"
else:
    print("Invalid Input. Please try again")
    exit()



print("Your grade is: ", grade)