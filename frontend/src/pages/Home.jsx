import React from "react";
import backgroundImage from "../assets/Background-Image.avif";

const Home = () => {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div style={style}>
      <h2>Hi, I am Kashif Shakeel</h2>
      <h3>Full Stack Developer</h3>
      <p>
        I am a Full Stack Developer. I have experience in developing web
        applications using Node.js and React.js.
      </p>
      <a href="../assets/Resume.pdf" download>
        <button>Resume</button>
      </a>
    </div>
  );
};

export default Home;
