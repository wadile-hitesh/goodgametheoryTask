import React from "react";

function Card({ imageUrl, name, price, ratingsAvg, ratingsReviews }) {
  let roundedRating = ratingsAvg.toFixed(2);
  return (
    <div className="w-96 h-40 flex m-2 bg-neutral-200 rounded-lg">
      <div className="h-full flex w-40 min-w-40 items-center bg-gray-700 rounded-xl justify-center">
        <img src={imageUrl} alt="card" />
      </div>
      <div className="flex flex-col m-2 p-2">
        <h2 className="font-bold">{name}</h2>
        <p>{price}</p>
        <p>{roundedRating} &#11088;</p>
      </div>
    </div>
  );
}

export default Card;
