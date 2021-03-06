import React from "react";

export default function PaginationButtons({ onClick }) {
  return (
    <div
      className="btn-group"
      role="group"
      aria-label="Basic mixed styles example"
    >
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onClick(-1)}
      >
        <i class="bi bi-caret-left-fill"></i>
      </button>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => onClick(1)}
      >
        <i class="bi bi-caret-right-fill"></i>
      </button>
    </div>
  );
}
