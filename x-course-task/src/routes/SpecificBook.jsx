import "../assets/SpecificBook.css";

import OrderSection from "../components/OrderSection";
import BookSection from "../components/BookSection";

import { useParams } from "react-router-dom";
import { useBooks } from "../hooks/useBooks";

function SpecificBook() {
  const books = useBooks();
  const { bookID } = useParams();

  const currentBook = books.find(({ id }) => id == bookID);
  const {
    author,
    price,
    image,
    title,
    level,
    tags,
    amount,
    shortDescription,
    description,
  } = currentBook;

  return (
    <>
      <div className="specific-book-container flex">
        <BookSection
          title={title}
          author={author}
          image={image}
          level={level}
          tags={tags}
          shortDescription={shortDescription}
          description={description}
        />

        <OrderSection
          bookID={bookID}
          price={price}
          title={title}
          amount={amount}
        />
      </div>
    </>
  );
}

export default SpecificBook;
