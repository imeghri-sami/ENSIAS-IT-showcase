import React from "react";

export default function HiddenMonkey({ hidden }) {
  return (
    <div>
      <img
        src="https://media.giphy.com/media/cegWQ66TiGYDK/giphy.gif"
        hidden={hidden}
        width="300px"
      />
    </div>
  );
}
