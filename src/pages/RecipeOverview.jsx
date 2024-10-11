/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Box,
  Input,
  SimpleGrid,
  Text,
  Image,
  Button,
  Badge,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { data } from "../data";

const RecipeOverview = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  // Get recipes from data.js
  const recipes = data.hits.map((hit) => hit.recipe);

  // Filter recipes
  const filteredRecipes = recipes.filter((recipe) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return (
      recipe.label.toLowerCase().includes(lowerCaseSearchTerm) ||
      recipe.healthLabels.some((label) =>
        label.toLowerCase().includes(lowerCaseSearchTerm)
      )
    );
  });

  //  selecting a recipe by uniqueID
  const handleSelectRecipe = (recipeId) => {
    navigate(`/recipe/${recipeId}`); // Pass uniqueID
  };

  const tagColors = {
    diet: "green",
    caution: "red",
    meal: "blue",
    dish: "purple",
  };

  return (
    <Box p={4}>
      <Input
        bg="white"
        placeholder="Search for recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        mb={4}
      />
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {filteredRecipes.map((recipe) => (
          <Box
            key={recipe.id} // UniqueID as key
            borderWidth="1px"
            borderRadius="lg"
            p={4}
            display="flex"
            flexDirection="column"
            alignItems="center"
            bg="white"
            boxShadow="md"
            _hover={{ boxShadow: "lg", transform: "scale(1.03)" }}
            transition="transform 0.2s ease-in-out"
          >
            <Image
              src={recipe.image}
              alt={recipe.label}
              boxSize={{ base: "70%", md: "50%" }}
              objectFit="cover"
            />
            <Box p={4} textAlign="center" flexGrow={1}>
              <Text fontWeight="bold" fontSize={{ base: "md", md: "lg" }}>
                {recipe.label}
              </Text>
              <VStack align="center" spacing={2} mt={2}>
                {recipe.dietLabels.map((label, idx) => (
                  <Badge key={idx} colorScheme={tagColors.diet}>
                    {label}
                  </Badge>
                ))}
                {recipe.cautions.map((caution, idx) => (
                  <Badge key={idx} colorScheme={tagColors.caution}>
                    {caution}
                  </Badge>
                ))}
                <Badge colorScheme={tagColors.meal}>
                  {recipe.mealType.join(", ")}
                </Badge>
                <Badge colorScheme={tagColors.dish}>
                  {recipe.dishType.join(", ")}
                </Badge>
              </VStack>
              {/* recipe.id from the data */}
              <Button
                onClick={() => handleSelectRecipe(recipe.id)}
                colorScheme="teal"
                size="sm"
                mt={4}
              >
                View Recipe
              </Button>
            </Box>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default RecipeOverview;
