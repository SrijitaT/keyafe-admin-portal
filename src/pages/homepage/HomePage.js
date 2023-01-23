import React, { useRef } from "react";

const HomePage = () => {
  const ref = React.useRef(null);

  const handleEnded = () => {
    ref.current.currentTime = 0;
    ref.current.play();
  };
  return (
    <div>
      <video
        ref={ref}
        loop
        controls={false}
        autoPlay
        onEnded={handleEnded}
        src="/VID-20230123-WA0000.mp4"
        type="video/mp4"
        style={{
          width: "100%",
          height: "50%",
          objectFit: "cover",
          overflow: "hidden",
        }}
      />
    </div>
  );
};

export default HomePage;
