import React from "react";
import HiddenMonkey from "../components/HiddenMonkey";
import ImageCard from "../components/ImageCard";
import { fetchRandomImage } from "../services/services";

export default function RandomImageView() {
  const [image, setImage] = React.useState({});
  const [hidden, setHidden] = React.useState(true);
  const audio = React.useRef();

  React.useEffect(() => {
    fetchRandomImage()
      .then((data) => setImage(data))
      .catch((err) => alert("404 error! "));
  }, []);

  const swayMeMore = () => {
    audio.current.play();
    setHidden(false);
  };

  return (
    <>
      <audio ref={audio} src="/assets/sway.mp3"></audio>

      <div className="d-flex align-items-center flex-column">
        {hidden ? (
          <>
            <button
              type="button"
              className="btn btn-success btn-lg mb-4"
              onClick={swayMeMore}
            >
              <i className="bi bi-arrow-counterclockwise"></i>
            </button>
            <ImageCard image={image} cardSize={40} />
          </>
        ) : (
          <HiddenMonkey hidden={hidden} />
        )}
      </div>
    </>
  );
}
