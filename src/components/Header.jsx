/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => (
  <Box color="white" p={4}>
    <Heading size="lg" textAlign="center">
      Recipe App
    </Heading>
  </Box>
);

export default Header;
