# Attendance System - Simple Login function with JWT Authentication

**  This project is a simple attendance system with a login feature created using React js + Tailwind css for the front-end and Spring Boot for the back-end. 

** The system uses JWT (JSON Web Token) for authentication.

## Project Structure
3axislabTask - root folder
        client - front end
        server - back end
        docs - store the screenshot
        ReadMe.MD - About the project

### -----------------------------------------Requirements

### Front-End (React)
- Node.js (v16 or above)
- npm (Node Package Manager)

### Back-End (Spring Boot)
- Java 11 or above
- Maven (v3.6 or above)


### Project Setup
    Clone the Repository
    git clone https://github.com/ThangarajahKajanan/3axislabsTask.git

 
### Setting Up the Front-End (React)
cd client
npm install
npm start

The front-end should now be running on http://localhost:3000

### Setting Up the Back-End (Spring Boot)
### cd server
# bash -> mvn clean install
# bash -> mvn spring-boot:run


###  Testing Credentials
### 1
# username = admin
# password = password123
### 2
# username = user
# password = secret

### How to Test
	1.	(Start both back-end & frontend ) Open the login page (http://localhost:3000/login).
	2.	Enter one of the testing credentials and click Login.
	3.	If successful, you will be redirected to the Home page.
	4.	To log out, click the Logout button.

### Error Handling
    1.if the credentials incorrect -> an error message will be displayed.
    2.If no token is found, the user will be redirected back to the login page.

### Login Validation: Only valid users from the users.txt file can log in.

