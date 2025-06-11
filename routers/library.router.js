import { Router } from "express";
import { libHome, getAllBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/library.controller.js";

export const libRouter = Router();

libRouter.get('/', getAllBooks);
libRouter.get('/:id', getBook);
libRouter.post('/', addBook);
libRouter.put('/:id', updateBook);
libRouter.delete('/:id', deleteBook);