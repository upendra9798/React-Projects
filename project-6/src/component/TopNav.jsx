import { Button, Heading, Icon, Box, Flex } from "@chakra-ui/react";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/ui/menu";  // npx @chakra-ui/cli snippet add menu
import { FaBars, FaUserTie } from "react-icons/fa";

const TopNav = ({title}) => {
  return (
    <Box   p={4} bg="white"> 
    {/* BoxShadow only in chakra ui  */}
      <Flex maxW="1200px" alignItems="center" justifyContent="space-between" px="10" mx="auto">
        {/* Dashboard Heading */}
        <Heading  size="xl" fontSize="28px" fontWeight="bold">{title}</Heading>

        {/* Actions Button */}
        <MenuRoot>
          <MenuTrigger asChild>
            <Button variant="solid" size="sm" bg="gray.200" borderRadius="md">
             <Icon as={FaUserTie}/> 
            </Button>
          </MenuTrigger>
          <MenuContent>
            <MenuItem>Logout</MenuItem> 
            <MenuItem>Support</MenuItem>
          </MenuContent>
        </MenuRoot>
      </Flex>
    </Box>
  );
};

export default TopNav;
