const mongoose = require('mongoose');

module.exports.dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useFindAndModify: false,
            //  useCreateIndex: true,
        });
        console.log("Database is Connected Successful");
    } catch (error) {
        console.error("Error connecting to the database:", error.message);
    }
};
