import React from 'react'
import {Box, Heading, HStack, Icon, Stack, Text} from "@chakra-ui/react"
import {RxDashboard} from "react-icons/rx"
import {BsArrowDownUp} from "react-icons/bs"
import {BiSupport} from "react-icons/bi"
import { Link, useLocation } from 'react-router-dom'
const Sidenav = () => {
const location = useLocation();//useLocation is a hook from React Router that provides the current URL location of the application.
// It returns an object that contains the current pathname (URL path).If the URL is http://localhost:3000/transactions,
// location.pathname will be "/transactions".

const isActiveLink = (link) => {
    return location.pathname == link;
}
//This function checks if the given link matches the current pathname.
// It compares the location.pathname (current URL) with the link (the expected path).
// If they match, the function returns true; otherwise, it returns false.

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
    <Link to={nav.link}  key={nav.text}>
        {/* // HStack - display Flex, alignItems centre 
        //mx-3 or 12px -> 3*4=12px (chakra Ui) */}
        <HStack  
        bg={isActiveLink(nav.link) ? "#F3F3F7" : "transparent"}
        color={isActiveLink(nav.link) ? "#171717" : "#797E82"}
        borderRadius="10px"
        py="3" px="4"
         _hover={{
            bg: "#F3F3F7",
            color: "#171717"
        }}
        >
            <Icon as={nav.icon}/>
            <Text fontSize="14px" font-weight="medium">{nav.text} </Text>
        </HStack> 
        </Link>
    ))}
   </Box>

</Box>
<Box mt="6" mx="3" mb="6">
  <Link to="/support">
        <HStack  
        borderRadius="10px"
         py="3" px="4"
         bg={isActiveLink("/support") ? "#F3F3F7" : "transparent"}
         color={isActiveLink("/support") ? "#171717" : "#797E82"}
         _hover={{
            bg: "#F3F3F7",
            color: "#171717"
        }}
        >
            <Icon as={BiSupport}/>
            <Text fontSize="14px" font-weight="medium">Support </Text>
        </HStack> 
        </Link>
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
