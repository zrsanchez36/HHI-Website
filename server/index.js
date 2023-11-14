require('dotenv').config();
const express = require('express');
const calendarRoutes = require('./routes/calendarRoutes');

const app = express();
app.use(express.json());


app.use('/api/calendar', calendarRoutes);


app.use((req, res, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
