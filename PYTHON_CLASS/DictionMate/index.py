import json
import difflib

def load_dictionary(file_path):
    with open(file_path, 'r') as file:
        return json.load(file)

# Function to get the definition of a word
def get_definition(word, dictionary):
    word = word.lower()  # Normalize the case
    if word in dictionary:
        return dictionary[word]
    else:
        similar_words = difflib.get_close_matches(word, dictionary.keys())
        return similar_words

# Main function to run the program
def main():
    dictionary = load_dictionary('./data.json')
    
    while True:
        user_input = input("Enter a word to get its definition (or type 'exit' to quit): ")
        
        if user_input.lower() == 'exit':
            break
        
        definition = get_definition(user_input, dictionary)
        
        if isinstance(definition, list):
            print(f"Definition(s) of '{user_input}':")
            for definition_text in definition:
                print(f"- {definition_text}")
        else:
            print(f"'{user_input}' not found in the dictionary.")
            if definition:
                print("Did you mean:", ", ".join(definition))
            else:
                print("No suggestions available.")

if __name__ == "__main__":
    main()
