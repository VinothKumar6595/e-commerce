import React, { useState } from "react";

const Reviews = () => {
  const [reviews, setReviews] = useState(false);
  const showReview = () => {
    setReviews((prev) => {
      return !prev;
    });
  };

  return (
    <div>
      {reviews && (
        <div>
          <div className=" bg-gray-300 w-96 mt-2 mb-2 p-1.5 rounded-md">
            <h4 className="font-bold text-xl">Vinoth</h4>
            <p>Great Shirt</p>
          </div>
          <div className=" bg-gray-300 w-96 mt-2 mb-2 p-1.5 rounded-md">
            <h4 className="font-bold text-xl">Priya</h4>
            <p>Great Shirt</p>
          </div>
          <div className=" bg-gray-300 w-96 mt-2 mb-2 p-1.5 rounded-md">
            <h4 className="font-bold text-xl">Praveen</h4>
            <p>Great Shirt</p>
          </div>
          <div className=" bg-gray-300 w-96 mt-2 mb-2 p-1.5 rounded-md">
            <h4 className="font-bold text-xl">Aswin</h4>
            <p>Great Shirt</p>
          </div>
        </div>
      )}
      <button
        className="bg-blue-200 p-2 rounded-lg hover:bg-black hover:text-white m-auto ml-32 mt-6"
        onClick={showReview}
      >
        Show All Reviews
      </button>
    </div>
  );
};

export default Reviews;
