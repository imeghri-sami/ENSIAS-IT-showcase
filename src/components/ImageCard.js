import React from "react";

export default function ImageCard({ image, cardSize = 19 }) {
  return (
    <div className="card mx-1 my-1" style={{ width: cardSize + "rem" }}>
      <img src={image.download_url} className="card-img-top" alt={image.url} />
      <div className="card-body">
        <h5 className="card-title">{image.author}</h5>
        {`${image.width} x ${image.height}`}
        <p className="mb-1 text-end">
          <a href={image.url} className="btn btn-light">
            source
          </a>
        </p>
      </div>
    </div>
  );
}
