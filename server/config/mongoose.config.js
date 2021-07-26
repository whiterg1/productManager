const mongoose = require("mongoose");

//Connects to MongoDB and if name of database does not currently exist, it will create a new one
mongoose.connect('mongodb://localhost/pm_db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=> console.log("Database connection established"))
    .catch(err=> console.log("There was an error", err))