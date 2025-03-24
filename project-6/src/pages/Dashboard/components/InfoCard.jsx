import { Badge, Stack, Text, Box } from "@chakra-ui/react";

const InfoCard = ({ text, tagText, inverted }) => {
  return (
    <Stack
      position="relative"
      bgImage={inverted ? "url('/grid_bg.svg')" : "url('/dot_bg.svg')"}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgColor={inverted ? "#5F00D9" : "white"}
      borderRadius="lg"
      p={6}
      height="140px" // Adjust height based on content
      display="flex"
      justifyContent="space-between"
    >
      {/* Tag Badge */}
      <Badge 
        width="fit-content" 
        display="flex" 
        justifyContent="center" 
        alignItems="center"
        color={inverted ? "#5F00D9" : "white"}
        bg={inverted ? "white" : "#5F00D9"}
        borderRadius="full"
        px="2"
        py="1"
      >
        {tagText}
      </Badge>

      {/* Text Over Image */}
      <Text
        fontWeight="medium"
        fontSize="lg"
        color={inverted ? "white" : "black.80"}
        textAlign="left"
      >
        {text}
      </Text>
    </Stack>
  );
};

export default InfoCard;
