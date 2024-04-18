import React from "react";

export default function ImageCardGallery({ image }) {
  const tags = image.tags.split(",");

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href="#">
        <img
          className="rounded-t-lg w-full h-72"
          src={image.webformatURL}
          alt={image.type}
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h1 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            Photo by: &nbsp; &nbsp;
            <span className="mb-2 text-xl font-bold tracking-tight text-purple-500 ">
              {image.user}
            </span>
          </h1>
        </a>
        <ul className="text-center ">
          <li className="">
            <strong>Views: </strong>
            {image.views}
          </li>
          <li className="">
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li className="">
            <strong>Likes: </strong>
            {image.likes}
          </li>
          <li className="">
            <strong>Comments: </strong>
            {image.comments}
          </li>
          <li className="">
            <strong>Collections: </strong>
            {image.collections}
          </li>
        </ul>
      </div>
      <div className="p-5 text-center">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
          >
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}
