import React from "react";
import { CustomCard } from "../../../chakra/CustomCard";
import {  Button, Flex, HStack, Icon, Stack, Text,
    Tabs, 
    Box} from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiOutlineMinusCircle } from "react-icons/ai";

function PriceSection() {
    const timestamps = ["7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"];
  return (
      <Flex justify="space-between" align="start"
      bg= "white" borderRadius= "xl" p= "6"
      >
    <Stack>
        <HStack>
        <Stack>  
        {/* Stack (Vertical Stack)
It arranges its children vertically (column-wise). */}

        <HStack color="#535D66">
          <Text fontSize="14px">Current Price</Text>
        </HStack>
        <HStack>
          <HStack pr="20px">
            <Text fontSize="24px" lineHeight="28px">
              {" "}
              22.39401000
            </Text>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm" fontWeight="medium">
                22%
              </Text>
            </HStack>{" "}
          </HStack>
        </HStack>
        </Stack>

          <HStack>
          {/* HStack (Horizontal Stack)
It arranges its children horizontally (row-wise). */}
          <Button
                  bg="#5F00D9"
                  color="white"
                  fontWeight="bold"
                  borderRadius="10px"
                >
                  <AiFillPlusCircle size={20} color="white" />
                  Buy
                </Button>
        
                <Button
                  bg="#5F00D9"
                  color="white"
                  fontWeight="bold"
                  borderRadius="10px"
                >
                  <AiOutlineMinusCircle size={20} color="white" />
                  Sell
                </Button>
          </HStack>
          </HStack>
          
          <Tabs.Root variant="enclosed" maxW="md" defaultValue="tab-1">
      {/* Align Tabs to the Right */}
      <Flex justify="end">
        <Tabs.List style={{ display: "flex", gap: "4px", background: "#F3F4F6", padding: "4px", borderRadius: "6px",
          fontSize: "xs", padding: "6px 10px"
         }}>
          <Tabs.Trigger value="tab-1">1H</Tabs.Trigger>
          <Tabs.Trigger value="tab-2">1D</Tabs.Trigger>
          <Tabs.Trigger value="tab-3">1W</Tabs.Trigger>
          <Tabs.Trigger value="tab-4">1M</Tabs.Trigger>
        </Tabs.List>
      </Flex>

      {/* Content Box */}
      <Box mt="4" p="4" border="1px solid #ddd">
        <Tabs.Content value="tab-1">
        <img w="100%" src="/graph.svg" mt="3rem" />
          <HStack justify="space-between">
            {timestamps.map((timestamp) => (
              <Text key={timestamp} fontSize="sm" color="#535D66">
                {timestamp}
              </Text>
            ))}
          </HStack>
        </Tabs.Content>

        <Tabs.Content value="tab-2">
          <Text>Data for 1D</Text>
        </Tabs.Content>

        <Tabs.Content value="tab-3">
          <Text>Data for 1W</Text>
        </Tabs.Content>

        <Tabs.Content value="tab-4">
          <Text>Data for 1M</Text>
        </Tabs.Content>
      </Box>
    </Tabs.Root>
      </Stack>
      </Flex>
  );
}

export default PriceSection;
