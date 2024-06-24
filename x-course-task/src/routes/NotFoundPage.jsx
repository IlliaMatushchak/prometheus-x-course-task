import React from "react";
import "../assets/ErrorPage.css";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="error-section">
      <p>
        Try to choose another page. <br />
        <span>This page does not exist!</span>
        <br />
        <Link to="/">Go to main page.</Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
