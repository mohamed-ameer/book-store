import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import BookStoreProvider from "./context/BookStoreProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
// loader
window.onload = () =>{
  fadeOut();
}
function loader(){
  document.querySelector('.loader-container').classList.add('active');
}
function fadeOut(){
  setTimeout(loader, 4000);
}
root.render(
  <React.StrictMode>
    <BookStoreProvider>
      <App />
    </BookStoreProvider>
  </React.StrictMode>
);
