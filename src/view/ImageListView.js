import React from "react";
import { fetchImages } from "../services/services";
import ImageCard from "../components/ImageCard";
import PaginationButtons from "../components/PaginationButtons";
import Loading from "../components/Loading";

export default function ImageListView() {
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    fetchImages(currentPage).then((data) => {
      setImages(data);
      setLoading(false);
    });
  }, [currentPage]);

  const handleClick = (offset) => {
    let nextPage = currentPage + offset;

    if (nextPage < 0) nextPage = 0;

    setCurrentPage(nextPage);
  };

  return loading ? (
    <Loading />
  ) : (
    <>
      <section className="py-5 container d-flex flex-wrap justify-content-center align-items-start">
        {images.map((image) => {
          return <ImageCard key={image.id} image={image} />;
        })}
      </section>
      <div style={{ width: "100%" }} className="text-center mb-5">
        <PaginationButtons onClick={handleClick} />
      </div>
    </>
  );
}
