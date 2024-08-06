class Book:
    def __init__(self, title, author, publication_year):
        self.title = title
        self.author = author
        self.publication_year = publication_year
        self.borrowed = False

    def borrow_book(self):
        if not self.borrowed:
            self.borrowed = True
            print(f"The book {self.title} has been borrowed")
        else:
            print("The book is already borrowed")
    
    def return_book(self):
        if self.borrowed:
            print(f"The book {self.title} has been returned")
        else:
            print("The currently has not been borrowed")
        
    def display_info(self):
        print(f"Title: {self.title}")
        print(f"Author: {self.author}")
        print(f"Publication_year: {self.publication_year}")
        print(f"Borrowed: {'Yes' if self.borrowed else 'No'}")


book1 = Book("C++ Metrics", "James C++", 2021) #instance
book1.display_info() #book_info

# Borrow the book
book1.borrow_book()

# Display book information after borrowing
book1.display_info()

# Return the book
book1.return_book()

# Display book information after returning
book1.display_info()
