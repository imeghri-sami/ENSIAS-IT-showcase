import React from "react";
import ImageListView from "../view/ImageListView";
import RandomImageView from "../view/RandomImageView";

export default function Main() {
  const [randImgview, setRandImgview] = React.useState(false);

  const handleClick = () => {
    setRandImgview(!randImgview);
  };

  return (
    <>
      <section className="pt-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Welcome to ENSIAS-IT images showcase</h1>
            <p className="lead text-muted">
              Exercitation consectetur culpa do do officia velit sint in id ad
              dolore aliquip sunt ut. Cupidatat anim adipisicing dolor ut
              occaecat cillum aliquip quis. Qui tempor officia reprehenderit
              esse quis consequat reprehenderit do laborum amet labore eiusmod.
              Aute occaecat sit dolore qui officia consequat esse enim pariatur.
            </p>
            <div className="d-flex flex-md-row flex-col flex-column justify-content-center">
              <button
                href="#"
                className="btn btn-primary md-inline mx-md-2 my-2 flex-fill"
                onClick={handleClick}
                disabled={!randImgview}
              >
                List
              </button>
              <button
                href="#"
                className="btn btn-secondary md-inline mx-md-2 my-2 flex-fill"
                onClick={handleClick}
                disabled={randImgview}
              >
                Random
              </button>
            </div>
          </div>
        </div>
      </section>
      {randImgview ? <RandomImageView /> : <ImageListView />}
    </>
  );
}
