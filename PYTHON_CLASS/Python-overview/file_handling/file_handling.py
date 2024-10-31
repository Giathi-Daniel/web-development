def main():
    try:
        with open("my_file.txt", "w") as file:
            file.write("Hello, World!\n")
            file.write("I love python programming\n")
            file.write("I am 10 years old\n")
            
        print("File created and add three lines of content")
        
        # Display file's content
        with open("my_file.txt", 'r') as file:
            content = file.read()
            print("\nContents of my_file.txt")
            print(content)
            
        # Append
        with open("my_file.txt", 'a') as file:
            file.write("Adding another line\n")
            file.write("Programming is fun\n")
            file.write("Last line added.\n")
            
        print("Additional lines appended to the file")
        
    except FileNotFoundError:
        print("Error: The file was not found")
        
    except PermissionError:
        print("Error: You do not have permission to access this file")
    
    except Exception as e:
        print(f"An unexpected error occured: {e}")
    
    finally:
        print("File operations completed")

if __name__ == "__main__":
    main()