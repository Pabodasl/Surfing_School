# SurfDeck - Surfing School Management System

A comprehensive MERN stack web application designed for managing a surfing school in Arugambay Area, Sri Lanka. This system provides complete management solutions for lessons, bookings, equipment, staff, students, events, and payments.

## 🏄 Project Overview

**SurfDeck** is a full-stack surfing school management system developed as a 2nd Year 2nd Semester project. The application streamlines all aspects of running a surf school, from student registrations and lesson scheduling to equipment maintenance and payment processing.

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Chart.js / Recharts** - Data visualization
- **jsPDF** - PDF generation

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

## 📁 Project Structure

```
Surfing-Project-MERN--main/
├── backend/
│   ├── app.js                 # Main server file
│   ├── Controllers/          # Business logic
│   │   ├── BookingControl.js
│   │   ├── equipment.controller.js
│   │   ├── LessonControl.js
│   │   ├── PaymentControl.js
│   │   ├── PlaneventController.js
│   │   ├── SalesControl.js
│   │   ├── StaffControl.js
│   │   ├── StudentControl.js
│   │   └── suplier.controller.js
│   ├── Model/               # Database models
│   │   ├── BookingModel.js
│   │   ├── equipment.model.js
│   │   ├── LessonModel.js
│   │   ├── PaymentModel.js
│   │   ├── PlaneventModel.js
│   │   ├── SalesModel.js
│   │   ├── StaffModel.js
│   │   ├── StudentModel.js
│   │   └── suplier.model.js
│   └── Route/               # API routes
│       ├── BookingRoute.js
│       ├── equimentRoute.js
│       ├── LessonRoute.js
│       ├── PaymentRoute.js
│       └── ...
├── frontend/
│   ├── src/
│   │   ├── Booking/        # Booking management
│   │   ├── Equipment/      # Equipment management
│   │   ├── Lessons/        # Lesson management
│   │   ├── Staff/          # Staff management
│   │   ├── Students/       # Student management
│   │   ├── Event/          # Event management
│   │   ├── Payment/       # Payment processing
│   │   └── Pages/         # Main pages
│   └── public/
└── README.md
```

## 🎯 Key Features

### 1. **Lesson Management** 
- Create, read, update, and delete lessons
- Lesson scheduling and calendar view
- Instructor assignment
- Lesson descriptions and details
- Student enrollment tracking

### 2. **Booking Management**
- Package booking system
- Booking CRUD operations
- Booking summaries and reports
- View and update bookings
- Booking status tracking

### 3. **Equipment Management** ⭐
A comprehensive equipment management system for tracking and maintaining all surf school equipment.

#### Features:
- **Equipment Tracking**: Real-time visibility into equipment status, location, and availability
- **Maintenance Requests**: Submit and track maintenance requests with automated reminders
- **Inventory Management**: Monitor stock levels and receive low-stock alerts
- **Equipment Categories**:
  - Surfboards (Beginner, Intermediate, Longboard, Shortboard)
  - Wetsuits (Adult & Kids sizes)
  - Safety Gear (First Aid Kits, Safety Buoys, Rescue Tubes)
  - Accessories (Leashes, Fins, Wax, Rash Guards, Cameras)
  - Storage (Waterproof Bags, Dry Bags, Transport Cases)

#### Equipment Management Pages:
- **Landing Page** (`/equipment`): Professional landing page with equipment overview
- **Equipment List** (`/Etable`): View all equipment with search and filter capabilities
- **Add Equipment** (`/Eadd`): Submit new equipment requests with validation
- **Update Equipment** (`/Eupdate/:id`): Edit existing equipment records
- **Analytics** (`/barchar`): Visual charts showing equipment quantity and distribution

#### Key Features:
- ✅ Date validation (only future dates allowed)
- ✅ Equipment dropdown with predefined list (prevents duplicates)
- ✅ Delete confirmation modal
- ✅ PDF report generation
- ✅ Real-time search functionality
- ✅ Modern, responsive UI design

### 4. **Staff Management**
- Staff registration and profiles
- Staff details and information
- Staff scheduling

### 5. **Student Management**
- Student registration
- Student profiles and details
- Enrollment tracking

### 6. **Event Management**
- Event planning and registration
- Multiple event types (Board Surf, Boat Surf, Wind Surf, Special Surf)
- Event notifications
- Event reports

### 7. **Payment Management**
- Payment processing
- Payment summaries
- Payment reports and analytics
- Multiple payment methods

### 8. **Sales Management**
- Product sales tracking
- Order management
- Sales reports

### 9. **Supplier Management**
- Supplier information
- Order tracking
- Supplier analytics

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or Atlas)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone <repository-url>
cd Surfing-Project-MERN--main
```

2. **Install backend dependencies**
```bash
cd backend
npm install
```

3. **Install frontend dependencies**
```bash
cd ../frontend
npm install
```

4. **Configure MongoDB**
   - Update the MongoDB connection string in `backend/app.js`
   - Current connection: `mongodb+srv://chandrasenapaboda_db_user:0UJekNPXKkae1Q54@cluster0.scoywo8.mongodb.net/`

5. **Start the backend server**
```bash
cd backend
npm start
```
Server runs on `http://localhost:5009`

6. **Start the frontend development server**
```bash
cd frontend
npm run dev
```
Frontend runs on `http://localhost:5173`

## 📱 Main Routes

### Public Routes
- `/` - Home page
- `/packages` - Surfing packages
- `/aboutus` - About page
- `/staff` - Staff information
- `/events` - Events page
- `/payment` - Payment page
- `/signin` - Sign in page
- `/registerStu` - Student registration

### Equipment Management Routes
- `/equipment` - Equipment landing page
- `/Etable` - Equipment list/table
- `/Eadd` - Add new equipment request
- `/Eupdate/:upId` - Update equipment
- `/barchar` - Equipment analytics/charts
- `/maintainelog` - Equipment manager login

### Admin Routes
- `/adminhome` - Admin dashboard
- `/adminlogin` - Admin login

### Other Management Routes
- `/booking` - Booking management
- `/lessondetails` - Lesson details
- `/student` - Student management
- `/staffm` - Staff management
- `/paymentpage` - Payment page

## 🎨 Design Features

### Equipment Management UI
- Modern, coastal-themed design
- Responsive layout (mobile, tablet, desktop)
- Smooth animations and transitions
- Professional landing page with hero section
- Card-based layouts
- Gradient color schemes
- Interactive hover effects

### Color Palette
- Primary: Ocean Blue (#3B82F6)
- Secondary: Teal/Cyan (#06B6D4)
- Accent: Indigo/Purple
- Background: White/Slate gradients

## 🔐 Authentication

- Admin login for administrative access
- Equipment manager login (username: `hansi`, password: `pabo`)
- Student registration and login

## 📊 Data Management

### Equipment Data Model
```javascript
{
  name: String,           // Equipment name (from predefined list)
  Reqdata: Date,          // Required date (future dates only)
  Task: String,           // Maintenance task description
  Quantity: Number,       // Item quantity
  fund: Number           // Available fund
}
```

## 🛡️ Validation & Security

### Equipment Management Validations
- Date validation: Only today and future dates allowed
- Equipment name: Dropdown selection (prevents typos and duplicates)
- Quantity: Positive integers only
- Fund: Positive numbers only
- Form validation with error messages

## 📈 Reports & Analytics

- Equipment quantity bar charts
- Equipment distribution pie charts
- PDF report generation
- Payment reports
- Booking summaries

## 🧪 Testing

To test the Equipment Management module:
1. Navigate to `/equipment` to see the landing page
2. Click "View Equipment" to see the equipment list
3. Click "Add New Request" to submit equipment requests
4. Use the search functionality to filter equipment
5. Generate PDF reports
6. View analytics charts

## 👥 Contributors

- **Lesson Management & Booking**: Implemented CRUD operations for lessons and bookings
- **Equipment Management**: Complete equipment tracking and maintenance system

## 📝 Notes

- This is a 2nd Year 2nd Semester project
- Focused on surfing school management in Arugambay Area
- Built using MERN Stack (MongoDB, Express, React, Node.js)
- Equipment Management module includes modern UI/UX with animations
- All equipment requests require future dates only
- Equipment names use predefined dropdown to ensure consistency

## 🔮 Future Enhancements

- Real-time equipment tracking with QR codes
- Equipment rental management
- Automated maintenance scheduling
- Equipment usage analytics
- Mobile app integration
- Email notifications for maintenance reminders
- Multi-language support

## 📄 License

This project is developed for academic purposes.



**SurfDeck** - Making surf school management effortless! 🏄‍♂️🌊
