import { connectToDatabase } from "@/utils/database";
import Contact from "@/models/contact";

export const POST = async (req, res) => {
    console.log(req.body)
    const { fname, lname, email, subject, message } = req.body;
    try {
        await connectToDatabase();
        const newContact = new Contact({
            fname,
            lname,
            email,
            subject,
            message
        });
        await newContact.save();
        return new Response(JSON.stringify(newContact), {
            status: 201
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error creating prompt" });
    }
};