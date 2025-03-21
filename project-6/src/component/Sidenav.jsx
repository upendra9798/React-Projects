import React from 'react'
import {Box, Heading, HStack, Icon, Stack, Text} from "@chakra-ui/react"
import {RxDashboard} from "react-icons/rx"
import {BsArrowDownUp} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
const Sidenav = () => {
 const navLinks = [
    {
        icon: RxDashboard,
        text: "Dashboard",
        link: "/"    // The path where the item should navigate when clicked.
    },
    {
        icon: BsArrowDownUp, 
        text: "Transactions",
        link: "/transactions"
    }
 ]

 

    return(
<Stack 
bg= "white"
justify="space-between"
 boxShadow={{
    base: "none",
    lg: "lg",
 }}
  w={{
    base: "full",
    lg: "16rem",
 }}
  h="100vh"> 
{/* Stack-  display: flex,flex-direction: column;(automatic)  boxShadow-for line at box */}
{/* Due to space-between in stack support went down  */}

<Box>
<Heading textAlign="center" fontSize = "20px" as="h1" pt="3.5rem">  
    {/* Heading-by default h3 tag , pt-padding top */}
    @DOSOMECODING
</Heading> 
   <Box mt="6" mx="3">
   {navLinks.map((nav) => (
        // HStack - display Flex, alignItems centre 
        //mx-3 or 12px -> 3*4=12px (chakra Ui)
        <HStack  
        borderRadius="10px"
        key={nav.text} py="3" px="4"
         _hover={{
            bg: "#F3F3F7",
            color: "#171717"
        }}
        color="#797E82"
        >
            <Icon as={nav.icon}/>
            <Text fontSize="14px" font-weight="medium">{nav.text} </Text>
        </HStack> 
    ))}
   </Box>

</Box>
<Box mt="6" mx="3" mb="6">
   {/* // HStack - display Flex, alignItems centre 
        //mx-3 or 12px -> 3*4=12px (chakra Ui) */}
        <HStack  
        borderRadius="10px"
         py="3" px="4"
         _hover={{
            bg: "#F3F3F7",
            color: "#171717"
        }}
        color="#797E82"
        >
            <Icon as={BiSupport}/>
            <Text fontSize="14px" font-weight="medium">Support </Text>
        </HStack> 
        </Box>
</Stack>    

    )
// In box of chakra we can directly write css in it 
    //    <Box as= "h2">  /
// {/* withot "as" it behaves as div  */}
    //    Sidenav
    //    </Box>
    
    
}

export default Sidenav
