/* eslint-disable no-unused-vars */
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import RecipeOverview from "./pages/RecipeOverview";
import SingleRecipePage from "./pages/SingleRecipePage";
import "./App.css";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<RecipeOverview />} />
          <Route path="/recipe/:id" element={<SingleRecipePage />} />
          <Route path="*" element={<Text>Page Not Found</Text>} />{" "}
          {/* Optional 404 */}
        </Routes>
      </Router>
    </ChakraProvider>
  );
};

export default App;
