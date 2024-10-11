/* eslint-disable no-unused-vars */
import React from "react";
import { Box, Image, Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate();

  // Check array properties before calling .join()
  const dietLabels =
    recipe.dietLabels?.length > 0
      ? recipe.dietLabels.join(", ")
      : "No diet labels";
  const cautions =
    recipe.cautions?.length > 0 ? recipe.cautions.join(", ") : "No cautions";
  const mealType =
    recipe.mealType?.length > 0 ? recipe.mealType.join(", ") : "No meal type";
  const dishType =
    recipe.dishType?.length > 0 ? recipe.dishType.join(", ") : "No dish type";

  const handleClick = () => {
    navigate(`/recipe/${encodeURIComponent(recipe.uri)}`);
  };

  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={recipe.image} alt={recipe.label} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="xl">
          {recipe.label}
        </Text>
        <Text>Diet: {dietLabels}</Text>
        <Text>Cautions: {cautions}</Text>
        <Text>Meal Type: {mealType}</Text>
        <Text>Dish Type: {dishType}</Text>
        <Button mt={4} onClick={handleClick}>
          View Recipe
        </Button>
      </Box>
    </Box>
  );
};

// PropTypes validation
RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    dietLabels: PropTypes.arrayOf(PropTypes.string),
    cautions: PropTypes.arrayOf(PropTypes.string),
    mealType: PropTypes.arrayOf(PropTypes.string),
    dishType: PropTypes.arrayOf(PropTypes.string),
    uri: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
