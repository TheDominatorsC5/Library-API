import { Books } from "../models/library.model.js";

export const libHome = async (req, res) => {
    try {
        res.send("ABC-Book API");
        
    } catch (error) {
        res.json({message: error.message});
    }
}

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
        await Books.create(req.body);
        res.send("Book added successfully");
        
    } catch (error) {
        res.json({message: error.message});
    }
}

export const updateBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndUpdate(req.params.id, req.body);

        if(!book) {
            res.send("Update failed!\nBook not found. ");
            return;
        }

        res.send("Book updated successfully");
        
    } catch (error) {
        res.json({message: error.message});
    }
}

export const deleteBook = async (req, res) => {
    try {
        const book = await Books.findByIdAndDelete(req.params.id);

        if(!book) {
            res.send("Deletion failed!\nBook not found. ");
            return;
        }

        res.send("Book deleted successfully");
        
    } catch (error) {
        res.json({message: error.message});
    }
}