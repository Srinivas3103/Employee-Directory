# Employee Directory

## Overview

This project is an Employee Directory web application built with React. It allows you to:
- View a list of employees
- Search employees by name or email
- Filter employees by first name, department, or role
- Add new employees (with duplicate checks)
- Edit and delete employees (including persistent storage in localStorage)
- Responsive UI with a fixed navbar and filter sidebar

## Project Structure

```
employee-directory/
├── public/
├── src/
│   ├── assets/
│   │   └── assets.js
│   ├── components/
│   │   ├── Employees/
│   │   │   ├── Employees.js
│   │   │   └── Employees.css
│   │   ├── FilterBar/
│   │   │   ├── FilterBar.js
│   │   │   └── FilterBar.css
│   │   ├── Footer/
│   │   ├── Navbar/
│   │   │   ├── Navbar.js
│   │   │   └── Navbar.css
│   ├── pages/
│   │   └── Home.js
│   └── App.js
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository:**
   ```sh
   git clone https://github.com/<your-username>/<repo-name>.git
   cd <repo-name>
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000).

4. **Build for production:**
   ```sh
   npm run build
   ```

## Usage

- **Search:** Use the search bar in the navbar to find employees by name or email.
- **Filter:** Click the "Filter" button to open the sidebar and filter by first name, department, or role.
- **Show Count:** Use the "Show" dropdown to select how many employees to display (including "Show All").
- **Add Employee:** Click "Add Employee" to open the form. All fields are required. Duplicate emails or names are not allowed.
- **Edit/Delete:** Use the Edit and Delete buttons on each employee card. Changes are saved in localStorage.
- **Reset:** Click the heading "Employee Directory" to reset the
