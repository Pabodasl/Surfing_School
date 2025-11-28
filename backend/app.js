const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Import necessary routes
const bookingRouter = require("./Route/BookingRoute");
const lessonRouter = require("./Route/LessonRoute");

const studentRouter = require("./Route/StudentRoute");
const staffRouter = require("./Route/StaffRoute");
const salesRouter = require("./Route/SalesRoute");
const equiment = require("./Route/equimentRoute");
const Sup = require("./Route/suplierRoute");

const paymentRouter = require("./Route/PaymentRoute");
const planeventRouter = require("./Route/PlaneventRoutes");
const adminRouter = require("./Route/AdminRoute");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/bookings", bookingRouter);
app.use("/lessons", lessonRouter);
app.use("/events", planeventRouter);
app.use("/students", studentRouter);
app.use("/staff", staffRouter);
app.use("/users",salesRouter);
app.use('/api/equiment', equiment);
app.use('/api/suplier', Sup);

app.use("/payments",paymentRouter);
app.use("/admin", adminRouter);

// Connect to MongoDB and start server
mongoose.connect("mongodb+srv://chandrasenapaboda_db_user:0UJekNPXKkae1Q54@cluster0.scoywo8.mongodb.net/")
    .then(() => console.log("Connected to MongoDB"))
    .then(() => {
        app.listen(5009, () => console.log("Server running on port 5009"));
    })
    .catch((err) => console.log(err));
