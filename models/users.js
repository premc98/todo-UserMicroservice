import mongoose from "mongoose";

const schema = new mongoose.Schema({
    // name: String,
    // email: String,
    // password: String,
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },

});

export const User = mongoose.model("User", schema);

