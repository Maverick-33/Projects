/* eslint-disable no-unused-vars */
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Text,
  Image,
  Heading,
  SimpleGrid,
  Button,
  Badge,
  VStack,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import { data } from "../data";

const SingleRecipePage = () => {
  const { id } = useParams(); // Use the ID from the URL
  const recipe = data.hits.find((hit) => hit.recipe.id === id)?.recipe; // Lookup by ID
  const navigate = useNavigate();

  if (!recipe) {
    return <Text>Recipe not found</Text>;
  }

  const tagColors = {
    diet: "green",
    caution: "red",
    health: "yellow",
    meal: "blue",
    dish: "purple",
  };

  // Function rouding 2 decimal places
  const roundDown = (num) => {
    return Math.floor(num * 100) / 100;
  };

  return (
    <Box p={6} textAlign="center">
      {" "}
      {/* Center text within Box */}
      <Button onClick={() => navigate("/")} colorScheme="teal" mb={4}>
        Back to Overview
      </Button>
      <Heading fontSize={{ base: "xl", md: "2xl" }}>{recipe.label}</Heading>
      <Image
        src={recipe.image}
        alt={recipe.label}
        width="100%"
        height="250px"
        objectFit="cover"
        objectPosition="center"
        borderRadius="md"
        my={4}
      />
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
        {/* Ingredients Section */}
        <Box
          borderWidth="1px"
          bg="white"
          p={4}
          boxShadow="md"
          textAlign="center"
        >
          <Heading size="md" mb={4}>
            Ingredients
          </Heading>
          <Box
            as="ul"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            {recipe.ingredientLines.map((ingredient, index) => (
              <Box
                as="li"
                key={index}
                style={{ fontSize: "16px", marginTop: "6px" }}
              >
                {ingredient}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Tags and Labels Section */}
        <Box borderWidth="1px" bg="white" p={4} boxShadow="md" mx="auto">
          {" "}
          <Heading size="md">Tags & Information</Heading>
          <VStack align="center" spacing={4} mt={2}>
            {/* Diet Labels */}
            <Box>
              <Text fontWeight="bold">Diet Labels:</Text>
              <Wrap spacing={2} justify="center">
                {" "}
                {recipe.dietLabels.map((label, idx) => (
                  <WrapItem key={idx}>
                    <Badge colorScheme={tagColors.diet}>{label}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Cautions */}
            <Box>
              <Text fontWeight="bold">Cautions:</Text>
              <Wrap spacing={2} justify="center">
                {" "}
                {recipe.cautions.map((caution, idx) => (
                  <WrapItem key={idx}>
                    <Badge colorScheme={tagColors.caution}>{caution}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Health Labels */}
            <Box>
              <Text fontWeight="bold">Health Labels:</Text>
              <Wrap spacing={2} justify="center">
                {" "}
                {recipe.healthLabels.map((healthLabel, idx) => (
                  <WrapItem key={idx}>
                    <Badge colorScheme={tagColors.health}>{healthLabel}</Badge>
                  </WrapItem>
                ))}
              </Wrap>
            </Box>

            {/* Meal Type */}
            <Box>
              <Text fontWeight="bold">Meal Type:</Text>
              <Wrap spacing={2} justify="center">
                {" "}
                <WrapItem>
                  <Badge colorScheme={tagColors.meal}>
                    {recipe.mealType.join(", ")}
                  </Badge>
                </WrapItem>
              </Wrap>
            </Box>

            {/* Dish Type */}
            <Box>
              <Text fontWeight="bold">Dish Type:</Text>
              <Wrap spacing={2} justify="center">
                {" "}
                <WrapItem>
                  <Badge colorScheme={tagColors.dish}>
                    {recipe.dishType.join(", ")}
                  </Badge>
                </WrapItem>
              </Wrap>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
      {/* Additional Details Section */}
      <Box
        borderWidth="1px"
        bg="white"
        p={4}
        boxShadow="md"
        mt={6}
        textAlign="center"
      >
        {" "}
        <Text>Yield: {recipe.yield}</Text>
        <Text>Calories: {Math.round(recipe.calories)} kcal</Text>
        <Text>
          Cooking Time:{" "}
          {recipe.totalTime > 0 ? `${recipe.totalTime} minutes` : "N/A"}
        </Text>
        {/* Complete Nutrition Details */}
        <Heading size="md" mt={4}>
          Nutrition Details
        </Heading>
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={4}
          mt={4}
          textAlign="left"
        >
          {" "}
          {/* Nutritional data grid */}
          {/* Iterate over the totalNutrients data */}
          {Object.keys(recipe.totalNutrients).map((key) => {
            const nutrient = recipe.totalNutrients[key];
            return (
              <Box
                key={key}
                p={2}
                borderWidth="1px"
                borderRadius="md"
                bg="gray.100"
              >
                {" "}
                <Text fontWeight="bold">{nutrient.label}:</Text>
                <Text>
                  {roundDown(nutrient.quantity)} {nutrient.unit}{" "}
                  {/* Rounding down each nutrient quantity */}
                </Text>
              </Box>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
export default SingleRecipePage;
