Greetings Hiring Team,

I am Dev Meerchandani, final year undergrad at IIT(ISM) Dhanbad. I completed an assignment that was given to me few days ago and here is the breif description about it.

## Task Description

The **Expense Tracker Management** project is a full-stack web application built using the MERN stack (MongoDB, Express.js, React, Node.js). It helps users manage their finances by tracking income and expenses. The application provides visual analytics using pie charts, offering insights into financial data over different time periods (weekly, monthly, yearly).

## Features

- **Expense and Income Management**: Easily add, edit, and delete income and expense entries.
- **Categorization**: Classify transactions into customizable categories.
- **Visual Analytics**: 
  - Combined and separate pie chart representations for income and expenses.
  - View analytics based on weekly, monthly, and yearly data.
- **User Authentication**: Secure login and registration functionality.
- **Responsive Design**: Optimized for use on desktops, tablets, and mobile devices.

## Tech Stack

### Frontend:
- React
- Ant Design (UI Framework)
- Axios (API Communication)
- Chart.js (To design charts)

### Backend:
- Node.js
- Express.js
- MongoDB (Database)
- Mongoose (ODM for MongoDB)
- JWT with HTTP only-cookies

## Approach:

### Backend:
- Install required packages express,jwt,cookie-parser,mongoose,routes,etc.
- First mongoose schema is defined for Users(name,email,password,date(default)) and Transaction(userId,amount,type,category,refernce,description,date)
- Make routes one for authentication and one for transaction then add all required APIs defination in it.
- Enter all the functioning of APIs in controller folder.

### Frontend:

- Install all react packages and chart.js
- Change the server of React-app to 3000
- Design all required web-pages with using bootstrap features and take input from users.
- Add custom filters to view up the transactions.
- Link all the APIs that was defined over backend with Axios
- Check all the CRED operations operating successfully and observe insight by pie-charts.
- 
## Installation

1. Clone the repository:

2. Install dependencies for the backend:
   
   cd backend
   npm install
   nodemon server.js

3. Install dependencies for the frontend:
   
   cd ../frontend
   npm install
   npm run start

4. Open your browser and navigate to \`http://localhost:3000\` to view the application.

## Project Structure

### Backend:
- \`/models\`: Contains Mongoose schemas for users and transactions.
- \`/routes\`: API routes for user authentication and transaction management.
- \`/controllers\`: Logic for handling API requests.
- \`/middlewares\`: Middleware for authentication and error handling.

### Frontend:
- \`/src/components\`: Reusable React components.
- \`/src/pages\`: Main pages of the application (e.g., Home, Login, Signup).
- \`/src/context\`: Context API for state management.
- \`/src/services\`: Axios service for API calls.

## Future Enhancements

- Implement budget-setting and alerts.
- Add dark mode for improved user experience.




