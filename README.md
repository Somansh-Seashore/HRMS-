# HRMS (Human Resource Management System)

A comprehensive web-based Human Resource Management System built with React, Vite, and Tailwind CSS. This application provides a complete solution for managing employee data, attendance, leave requests, performance, and onboarding processes.

## Features

### Core Functionality

- **Dashboard**: Overview of key HR metrics and statistics
- **Employee Management**: Add, view, and manage employee profiles
- **Attendance Tracking**: Monitor employee attendance records
- **Leave Management**: Handle leave requests and approvals
- **Performance Management**: Track employee performance metrics
- **Onboarding**: Manage new employee onboarding tasks

### Technical Features

- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Modern UI**: Clean and intuitive user interface with Lucide React icons
- **Data Visualization**: Charts and graphs using Recharts library
- **Routing**: Client-side routing with React Router DOM
- **Fast Development**: Powered by Vite for rapid development and building

## Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite 7.1.7
- **Styling**: Tailwind CSS 4.1.16
- **Icons**: Lucide React 0.548.0
- **Charts**: Recharts 3.3.0
- **Routing**: React Router DOM 7.9.4
- **Linting**: ESLint 9.36.0

## Project Structure

```
my-project/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── AddEmployeeForm.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   ├── data/
│   │   ├── attendance.json
│   │   ├── employees.json
│   │   ├── leaveRequests.json
│   │   └── onboardingTasks.json
│   ├── pages/
│   │   ├── AttendanceManagement.jsx
│   │   ├── Dashboard.jsx
│   │   ├── EmployeeDirectory.jsx
│   │   ├── EmployeeProfile.jsx
│   │   ├── LeaveManagement.jsx
│   │   ├── Onboarding.jsx
│   │   └── PerformanceManagement.jsx
│   ├── utils/
│   │   └── sendWelcomeMessage.js
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Somansh-Seashore/HRMS-.git
   cd HRMS-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code linting

## Usage

1. **Dashboard**: View overall HR statistics and quick access to main features
2. **Employee Directory**: Browse and search through all employees
3. **Add Employee**: Use the form to add new employees to the system
4. **Attendance Management**: Track and manage employee attendance
5. **Leave Management**: Approve or deny leave requests
6. **Performance Management**: Monitor and update employee performance
7. **Onboarding**: Guide new employees through their onboarding process

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

Somansh Seashore - somansh.seashore@gmail.com

Project Link: [https://github.com/Somansh-Seashore/HRMS-](https://github.com/Somansh-Seashore/HRMS-)
