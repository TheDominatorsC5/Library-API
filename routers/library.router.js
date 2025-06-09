import { Router } from "express";
import { libHome, getAllBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/library.controller.js";

export const libRouter = Router();

libRouter.get('/', libHome);
libRouter.get('/api/books', getAllBooks);
libRouter.get('/api/books/:id', getBook);
libRouter.post('/api/books', addBook);
libRouter.put('/api/books/:id', updateBook);
libRouter.delete('/api/books/:id', deleteBook);