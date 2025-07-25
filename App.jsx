import React from "react";
import { createRoot } from "react-dom/client";
import { styled } from "@linaria/react";

const Global = styled.div`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
      "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans",
      "Helvetica Neue";
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
    scrollbar-width: thin;
    scrollbar-color: white transparent;
  }

  body {
    height: 100vh;
    width: 100%;
    position: fixed;
    inset: 0;
    overflow: hidden;
  }

  video {
    width: 100%;
    height: 100%;
    position: fixed;
    inset: 0;
    object-fit: cover;
    object-position: center;
  }
`;

const App = () => {
  return (
    <Global>
      <video src="assets/humo.mp4" autoPlay muted loop />
    </Global>
  );
};

const root = document.createElement("div");
document.body.appendChild(root);
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default App;
