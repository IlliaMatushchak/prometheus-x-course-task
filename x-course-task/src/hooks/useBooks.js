import { createContext, useContext } from "react";
import fetchBooks from "../services/fetchBooks";

const BooksContext = createContext(fetchBooks());

const BooksProvider = BooksContext.Provider;

const useBooks = () => useContext(BooksContext);

export {BooksProvider, useBooks};