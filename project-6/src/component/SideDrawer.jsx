  import { Button, CloseButton, Drawer, Portal, Icon } from "@chakra-ui/react";
  import { useState } from "react";
  import { FaBars } from "react-icons/fa";  // Import the FaBars icon
  import Sidenav from "./Sidenav";

  const SideDrawer = () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        {/* Icon Button for opening drawer (Visible only on mobile) */}
        <Button 
          size="sm" 
          display={{ base: "block", lg: "none" }} 
          onClick={() => setOpen(true)}
        >
          <Icon as={FaBars} boxSize={4} />  {/* FaBars icon inside the button */}
        </Button>

        <Drawer.Root open={open} placement="left" onOpenChange={(e) => setOpen(e.open)}>
          <Portal>
            <Drawer.Backdrop />
            <Drawer.Positioner>
              <Drawer.Content bg="white" >
                <Drawer.Header>
                  <Drawer.Title color="black">@DOSOMECODING</Drawer.Title>
                </Drawer.Header>
                <Drawer.Body>
                  <Sidenav />
                </Drawer.Body>
                <Drawer.Footer>
                  <Button  onClick={() => setOpen(false)}>Close</Button>
                </Drawer.Footer>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="sm" />
                </Drawer.CloseTrigger>
              </Drawer.Content>
            </Drawer.Positioner>
          </Portal>
        </Drawer.Root>
      </>
    );
  };

  export default SideDrawer;
