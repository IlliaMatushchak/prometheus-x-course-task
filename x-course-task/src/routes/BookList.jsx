import "../assets/BookList.css";
import BookCard from "../components/BookCard";
import React, { useState } from "react";
import { useBooks } from "../hooks/useBooks";

function BookList() {

  const books = useBooks();
  const [selectValue, setSelectValue] = useState();
  const [searchValue, setSearchValue] = useState("");

  function filterBooksByPrice(books, range) {
    let priceRange;
    switch (range) {
      case "low":
        priceRange = [0, 15];
        break;
      case "medium":
        priceRange = [15, 30];
        break;
      case "high":
        priceRange = [30, 9999];
        break;
      default:
        return books;
    }

    let filteredBooks = books.filter(({ price }) => {
      let minPrice = priceRange[0],
        maxPrice = priceRange[1];
      return price > minPrice && price < maxPrice;
    });

    return filteredBooks;
  }

  function filterBooksByName(books, searchValue) {
    let filteredBooks = books.filter(({ title }) => {
      return title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return filteredBooks;
  }

  return (
    <>
      <section className="search-section flex">
        <label id="search-lable" htmlFor="search">
          <input
            type="search"
            // accessKey="S"
            name="searchBy"
            id="search"
            placeholder="Search by book name"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </label>

        <select
          name="priceRange"
          id="select"
          title="Select price range"
          defaultValue={"title"}
          value={selectValue}
          onChange={(e) => {
            setSelectValue(e.target.value);
          }}
        >
          <option value="title" disabled hidden>
            Price range
          </option>
          <option value="all">All prices</option>
          <option value="low">{"0$ < price < 15$"}</option>
          <option value="medium">{"15$ < price < 30$"}</option>
          <option value="high">{"price 30$ +"}</option>
        </select>
      </section>

      <section className="book-list flex">
        {filterBooksByName(
          filterBooksByPrice(books, selectValue),
          searchValue
        ).map((obj) => {
          return <BookCard key={obj.id} {...obj} />;
        })}
      </section>
    </>
  );
}

export default BookList;
