import React from "react";
import ReactDomClient from "react-dom/client";
import MyApp from './MyApp'
import "./index.css";

//create container
const container = document.getElementById("root");

//create root
const root = ReactDomClient.createRoot(container);

root.render(<MyApp />)