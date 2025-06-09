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

    release_date: {
        type: Date,
        required: true
    },

    image: String

}, {timestamps: true});

export const Books = model('Book', BookSchema);