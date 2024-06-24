import { Link } from "react-router-dom";
import notFoundImageUrl from "../assets/images/imageNotFound.png";

function BookCard({ image, title, author, price, id }) {
  let newImageUrl = image || notFoundImageUrl;

  return (
    <>
      <div className="book-card">
        <div className="img-container">
          <div
            className="book-img"
            style={{ backgroundImage: `url(${newImageUrl})` }}
          ></div>
        </div>

        <h2>{title}</h2>
        <p>{author}</p>
        <div className="flex">
          <p>Price: {price}</p>
          <Link to={`/specific-book/${id}`} className="btn-view">
            View
          </Link>
        </div>
      </div>
    </>
  );
}

export default BookCard;
