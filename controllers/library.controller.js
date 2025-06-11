import { Books } from "../models/library.model.js";
import { librarySchema } from "../schemes/library.schema.js";

export const getAllBooks = async (req, res) => {
    try {
        const books = await Books.find();
        res.json(books);
        
    } catch (error) {
        res.json({message: error.message});
    }
}

export const getBook = async (req, res) => {
    try {
        const book = await Books.findById(req.params.id);

        if(!book) {
            res.send("Book not found");
            return;
        }

        res.json(book);
        
    } catch (error) {
        res.json({message: error.message});
    }
}

export const addBook = async (req, res) => {
    try {
        const { error, value } = librarySchema.validate(req.body);

        if (error) {
            return res.status(400).json({error: error.details[0].message});
        }

        const book = await Books.create(value);
        return res.status(200).json({'book': book});
        
    } catch (error) {
        res.json({'error': error.message});
    }
}

export const updateBook = async (req, res) => {
    try {
        const { error, value } = librarySchema.validate(req.body);

        if (error) {
            return res.status(400).json({error: error.details[0].message});
        }

        const book = await Books.findByIdAndUpdate(req.params.id, value);

        if(!book) {
            res.status(400).json({'error': "Book not found"});
            return;
        }

        res.status(200).json({'book': value});
        
    } catch (error) {
        res.status(500).json({'error': error.message});
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);

        if(!book) {
            res.status(400).json({'error': "Book not found"});
            return;
        }

        res.status(200).json({'book': book});
        
    } catch (error) {
        res.status(500).json({'error': error.message});
    }
}