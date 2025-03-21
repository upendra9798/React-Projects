import React from "react";
import Sidenav from "./Sidenav";
import TopNav from "./TopNav";
import { Box, Container, Flex, useDisclosure } from "@chakra-ui/react";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  // const { isOpen, onClose, onOpen } = useDisclosure();
  // `useDisclosure` manages the open/close state of UI components like modals, drawers, etc.

  return (
    <Flex minH="100vh" bg="#F3F3F7">
      {/* Sidebar for larger screens */}
      <Box display={{ base: "none", lg: "flex" }}>
        <Sidenav />
      </Box>

      {/* Mobile Sidebar Drawer */}
      <SideDrawer  />

      <Box flexGrow={1} ml="1rem">
        {/* TopNav with onOpen passed for mobile menu toggle */}
        <TopNav title={title} />
        
        <Container maxW="1200px" mt="4" mx="auto" px="11">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
