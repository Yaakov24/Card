import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function App() {
  return (
    <div className="rounded-square">
      <Image />
      <Card position="absolute" top="-70px" left="50px" />
      <Info position="absolute" top="259px" left="1px" />
      <div className="tiny-squares-container">
        <TinySquare name="Yevamos" fontSize="11px" />
        <TinySquare name="Gittin" fontSize="11px" />
        <TinySquare name="Cesubos" fontSize="11px" />
        <TinySquare name="Kiddushin" fontSize="11px" />
        <TinySquare name="Baba Kama" fontSize="11px" />
        <TinySquare name="Baba Metzia" fontSize="11px" />
        <TinySquare name="Baba Basra" fontSize="11px" />
      </div>
    </div>
  );
}

function TinySquare(props) {
  const { name, fontSize } = props;
  return (
    <div className="tiny-square">
      <h4 style={{ fontSize }}>{name}</h4>
    </div>
  );
}

function Card(props) {
  const { position, top, left } = props;
  const style = {
    position,
    top,
    left,
  };
  return (
    <div className="title">
      <h2 style={style}>Yaakov Goldenberg</h2>
    </div>
  );
}

function Info(props) {
  const { position, top, left } = props;
  const style = {
    position,
    top,
    left,
    width: "40%", // Adjust the width as needed
    margin: "0 auto", // Center the paragraph horizontally
    marginTop: "5px", // Add a margin-top value to move the paragraph closer to the tiny boxes
  };
  return (
    <div className="square">
      <p style={style}>
        Yaakov Goldenberg is a fellow who learned in TEAM, TTB, CCJ, and ZA,
        then he became a successful programmer. His hobbies are doing
        calisthenics and playing the violin.
      </p>
    </div>
  );
}
function Image() {
  const style = {
    position: "absolute",
    top: "33px",
    left: "19px",
    zIndex: 0, // Set a negative z-index to position the image behind other elements
    maxWidth: "43%", // Add this line to limit the image width to the container's width
    height: "auto", // Add this line to maintain the image's aspect ratio
    border: "2px solid #000",
  };
  return (
    <img
      src="/images/CoolYaakov1.jpg"
      alt="Yaakov looking Cool"
      style={style}
    />
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
// React v18
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit
