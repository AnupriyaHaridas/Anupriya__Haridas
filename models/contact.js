import mongoose, {Schema, model, models} from "mongoose";

const contactSchema = new Schema({
    fname: {
        type: String
    },
    lname: {
        type: String,
    },
    email: {
        type: String,
    },
    subject: {
        type: String,
    },
    message: {
        type: String,
    }
});

export default models.Contact || model("Contact", contactSchema);
