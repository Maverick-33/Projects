/* eslint-disable react/no-deprecated */
/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    {" "}
    <App />
  </ChakraProvider>,
  document.getElementById("root")
);
