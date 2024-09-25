# Obituary Management System

 - The Simple system is designed in Django as the chosen framework and MySQL as the database

 # Assignment Question

 *Project Overview*
- Objective: Create a web application for submitting, managing, and displaying obituaries. The platform should include features for SEO and Social Media Optimization to enhance visibility and engagement.
Framework Options:
•	Django
•	Node.js
•	Laravel
•	Flask
*Scenario*
- You are part of a team working on an obituary management platform. The platform aims to provide an easy-to-use interface for users to submit and view obituaries. It should also include features for optimizing obituaries for search engines and integrating with social media to maximize reach and engagement.
# Tasks
- Task 1: Environment Setup
•	Test Area: Set up a development environment with the chosen framework and a database (MySQL, PostgreSQL, or SQLite).
•	Steps:
1.	Verify you can access a local server and have the chosen framework installed.
2.	Ensure the database service is running on your local server.
3.	Create a virtual environment for the project and install necessary dependencies.
- Task 2: Database Creation
•	Test Area: Create a database to store obituary data.
•	Steps:
1.	Open your database management tool.
2.	Create a new database named obituary_platform.
3.	Create a table named obituaries with the following columns:
	id (INT, Primary Key, Auto Increment)
	name (VARCHAR(100))
	date_of_birth (DATE)
	date_of_death (DATE)
	content (TEXT)
	author (VARCHAR(100))
	submission_date (DATETIME, default to current timestamp)
	slug (VARCHAR(255), Unique)
- Task 3: HTML Form Creation
•	Test Area: Develop an HTML form for submitting obituaries.
•	Steps:
1.	Create an HTML file named obituary_form.html.
2.	Include fields for Name, Date of Birth, Date of Death, Content, and Author in the form.
3.	Set the form method to POST and the action to a script named submit_obituary (appropriate to the chosen framework).
4.	Use CSS to style the form to make it visually appealing.
5.	Add JavaScript to validate the form inputs before submission.
- Task 4: Backend Script for Data Submission
•	Test Area: Write a script to handle form submission and store the data in the database.
•	Steps:
1.	Create a script named submit_obituary (appropriate to the chosen framework).
2.	Write code to capture the form data.
3.	Establish a connection to the obituary_platform database.
4.	Insert the captured data into the obituaries table.
5.	Provide a confirmation message to the user upon successful submission.
6.	Implement error handling to manage database connection issues or data insertion failures.
- Task 5: Backend Script for Data Retrieval
•	Test Area: Write a script to retrieve and display the stored obituaries.
•	Steps:
1.	Create a script named view_obituaries (appropriate to the chosen framework).
2.	Establish a connection to the obituary_platform database.
3.	Write a SQL query to select all records from the obituaries table.
4.	Display the retrieved data in an HTML table on the web page.
5.	Use CSS to style the table for better readability.
6.	Implement pagination if the dataset is large to improve usability.
- Task 6: SEO and Social Media Optimization
•	Test Area: Implement SEO and Social Media Optimization features.
•	Steps:
1.	Add meta tags (title, description, keywords) dynamically based on the obituary content.
2.	Use semantic HTML tags and structured data (schema.org) to improve search engine visibility.
3.	Implement Open Graph tags for better social media sharing previews.
4.	Integrate social media sharing buttons on obituary pages.
5.	Implement canonical tags to avoid duplicate content issues.
6.	Create an XML sitemap and submit it to search engines.
- Task 7: Testing and Validation
•	Test Area: Ensure the application works as expected.
•	Steps:
1.	Test the HTML form by submitting sample obituaries.
2.	Verify that the data is correctly inserted into the obituaries table.
3.	Access the view_obituaries page to ensure the data is correctly retrieved and displayed.
4.	Perform edge case testing to ensure the form handles various inputs and errors gracefully.
5.	Test the form and data retrieval on different browsers to ensure cross-browser compatibility.
*Deliverables*
•	obituary_form.html: HTML form for submitting obituaries.
•	submit_obituary script: Script for handling form submission and storing data.
•	view_obituaries script: Script for retrieving and displaying stored obituaries.
•	obituary_platform database and obituaries table with the specified structure.
•	Documentation covering the setup, development process, and usage of the application.
*Evaluation Criteria*
•	Functionality: The form captures data correctly, stores it in the database, and retrieves it for display.
•	Code Quality: Clean, well-documented code following best practices.
•	Usability: The form and obituary display are user-friendly and intuitive.
•	Creativity: Use of CSS and JavaScript to enhance the user interface and experience.
•	SEO and Social Media Optimization: Proper implementation of SEO and Social Media Optimization strategies.
•	Error Handling: Proper handling of errors and edge cases in form submission and data retrieval.
•	Cross-Browser Compatibility: Ensure the application works smoothly across different web browsers.
