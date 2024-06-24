import notFoundImageUrl from "../assets/images/imageNotFound.png";

import { useState } from "react";

function BookSection({
  author,
  image,
  title,
  level,
  tags,
  shortDescription,
  description,
}) {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <section className="book-section">
      <div className="flex">
        <img
          className="book-image"
          src={image || notFoundImageUrl}
          width="250px"
          alt="Book image"
        />
        <div className="book-info">
          <p>
            <span className="book-span">Book name:</span> <span>{title}</span>
          </p>
          <p>
            <span className="book-span">Book author:</span>{" "}
            <span>{author}</span>
          </p>
          <p>
            <span className="book-span">Book level:</span> <span>{level}</span>
          </p>
          <p>
            <span className="book-span">Book tags:</span>{" "}
            <span>{tags.join(", ")}</span>
          </p>
        </div>
      </div>

      <p
        className="book-description"
        onClick={() => {
          setShowFullDescription((prev) => !prev);
        }}
      >
        <span className="book-span">Description:</span>{" "}
        <span>
          {showFullDescription
            ? description
            : `${shortDescription} (Click to see more)...`}
        </span>
      </p>
    </section>
  );
}

export default BookSection;
