import { Router } from "express";
import { getAllBooks, getBook, addBook, updateBook, deleteBook } from "../controllers/library.controller.js";

export const libRouter = Router();

libRouter.get('/', getAllBooks);
libRouter.get('/:id', getBook);
libRouter.post('/', addBook);
libRouter.put('/:id', updateBook);
libRouter.delete('/:id', deleteBook);