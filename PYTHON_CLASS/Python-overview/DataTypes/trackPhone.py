import phonenumbers
from phonenumbers import geocoder


#prompt the user to enter a phone number
phone_number_input = input("Enter the phone number:: ")

parsed_number = phonenumbers.parse(phone_number_input, "KENYA")


#Get country and region information
print(phonenumbers.region_code_for_number(parsed_number))
print(geocoder.description_code_for_number(parsed_number, "en"))