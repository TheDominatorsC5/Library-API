import { Schema, model } from "mongoose";

const BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    year: {
        type: String,
        required: true
    },

    image: String

}, {timestamps: true});

export const Books = model('Book', BookSchema);