n=4

if n%2 == 0:
    print("Number " + str(n) + " is even.")
else:
    print("Number " + str(n) + " is odd.")

# Python program to illustrate short hand if-else
j = 30
print("Number " + str(j) + " is even.") if n == 4 else print("Number " + str(j) + " is odd.")


# Python program to illustrate elseif

# Function to determine the grade
def determine_grade(score):
    if score >= 90:
        grade = "A"
    elif score >= 80:
        grade = "B"
    elif score >= 70:
        grade = "C"
    elif score >= 60:
        grade = "D"
    else:
        grade = "F"
    return grade

# Sample scores
scores = [85, 92, 78, 60, 45]

# Determine and print the grades
for score in scores:
    grade = determine_grade(score)
    print(f"A score of {score} gets a grade of {grade}")
