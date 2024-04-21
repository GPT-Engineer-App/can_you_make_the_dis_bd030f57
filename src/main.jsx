import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#003366", // Dark Blue
    800: "#004080", // Medium Blue
    700: "#0059b3", // Light Blue
  },
};

const theme = extendTheme({
  colors,
breakpoints: {
    base: "0em",
    sm: "30em",
    md: "48em",
    lg: "62em",
    xl: "80em",
    "2xl": "96em",
  },
  styles: {
    global: {
      body: {
        color: "blue",
      },
    },
  },
  fonts: {
    heading: "Topgolf",
    body: "Topgolf",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
