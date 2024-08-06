# Calculating the volume of  a cylinder

def vol(height, radius):
    volume = 3.14 * radius * radius * height;
    print("The volume of the cylinder is : ", volume);

height = int(input("Enter the height of the cylinder"));

radius = int(input("Enter the radius of the cylinder"));

print(vol(height, radius));