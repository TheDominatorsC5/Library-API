import { Schema, model } from "mongoose";
import normalize from "normalize-mongoose";

const BookSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    description: String,

    year: {
        type: String,
        required: true
    },

    image: String

}, {timestamps: true});

BookSchema.plugin(normalize);
export const Books = model('Book', BookSchema);