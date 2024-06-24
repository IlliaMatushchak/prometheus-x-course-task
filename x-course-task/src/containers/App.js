import "./App.css";
import { useEffect, useState } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import fetchBooks from "../services/fetchBooks";
import { BooksProvider } from "../hooks/useBooks";
import { CartProvider } from "../hooks/useCart";

import { Layout } from "../routes/Layout";

import Cart from "../routes/Cart";
import Signin from "../routes/Signin";
import SpecificBook from "../routes/SpecificBook";
import BookList from "../routes/BookList";
import NotFoundPage from "../routes/NotFoundPage";

function App() {
  const [userName, setUserName] = useState("");
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [cart, setCart] = useState([]);
  const books = fetchBooks();
  // const [books, setBooks] = useState([]);

  // useEffect(() => {
  //   setBooks(fetchBooks());
  // }, []);

  return (
    <>
      <CartProvider value={{ cart, setCart }}>
        <BooksProvider value={books}>
          <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <Layout
                  userNameState={{ userName, setUserName }}
                  userLoggedState={{ userIsLoggedIn, setUserIsLoggedIn }}
                />
              }
            >
              <Route
                index
                element={
                  <Signin
                    userNameState={{ userName, setUserName }}
                    userLoggedState={{ userIsLoggedIn, setUserIsLoggedIn }}
                  />
                }
              />
              <Route path="book-list" element={<BookList />} />
              <Route path="specific-book/:bookID" element={<SpecificBook />} />
              <Route path="cart" element={<Cart />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          </HashRouter>
        </BooksProvider>
      </CartProvider>
    </>
  );
}

export default App;
