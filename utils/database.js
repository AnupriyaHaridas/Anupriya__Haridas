import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => {
    console.log('Mongodb is connecting')
    mongoose.set('strictQuery', true);
    if (isConnected) {
        console.log('Mongodb is already connected');
        return;
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "portfolio_contacts",
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        isConnected = true;
        console.log('Mongodb is connected');
    } catch (error) {
        console.log('Mongodb connection error', error);
    }
};