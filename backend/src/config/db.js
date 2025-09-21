import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const dbURI = process.env.MONGO_URI; 
        await mongoose.connect(dbURI);

        console.log("MONGODB CONNECTED SUCCESSFULLY!");
    } catch (error) {
        console.error("Error Connecting to MONGODB", error);
    }
};