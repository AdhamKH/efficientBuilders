import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100dvh",
        zIndex: "9",
        background: "white",
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
      }}
    >
      Loading...
    </div>
  );
};

export default Loading;
