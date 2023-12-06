# Task Tracker App

This simple Task Tracker app allows users to create, view, and toggle the completion status of tasks. The app is built using Node.js, Express, MongoDB, and Mongoose.

## Prerequisites

Make sure you have the following installed:

- Node.js and npm
- MongoDB

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/your-username/task-tracker-app.git
cd task-tracker-app
```

2. Install dependencies:

```bash
npm install
```

3. Set up your MongoDB database:

   - Create a `.env` file in the root directory.
   - Add your MongoDB connection string:

     ```env
     MONGODB_URI=your_mongodb_connection_string
     ```

4. Run the app:

```bash
npm start
```

The app will be accessible at `http://localhost:5000`.

## Project Structure

- **`index.js`**: Entry point for the application.
- **`model/Task.js`**: Mongoose model for tasks.
- **`config/connectdb.js`**: Connects to the MongoDB database.
- **`views/index.ejs`**: EJS template for displaying tasks.
- **`views/create_task.ejs`**: EJS template for creating new tasks.

## Routes

- **GET `/`**: Displays the list of tasks.
- **GET `/task/add`**: Renders the form to add a new task.
- **POST `/task/add`**: Handles the submission of the new task form.
- **POST `/toggle/:id`**: Toggles the completion status of a task.

## Usage

1. Visit `http://localhost:5000` in your browser to view the list of tasks.
2. Click on "Add Task" to open the form and submit a new task.
3. Use the checkboxes to toggle the completion status of tasks.

## Notes

- The app uses EJS templates for rendering views.
- Each task has a name and a completion status.
- Tasks can be added and marked as completed using the provided forms and checkboxes.

Feel free to customize and extend the app based on your needs!
