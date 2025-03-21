import { Badge, Button, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  AiOutlineArrowDown,
  AiOutlineArrowUp,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { CustomCard } from "../../../chakra/CustomCard";

const PortfolioSection = () => {
  return (
    <HStack justify="space-between" bg="white" borderRadius="xl" p="6"
    align={{
      base: "flex-start",
      xl: "center"
    }}
    flexDir={{
      base:"column",
      xl:"row"
    }}
    >
      <HStack 
      align={{
        base: "flex-start",
        xl: "center"
      }}
      flexDir={{
        base:"column",
        xl:"row"
      }}
      >
        <Stack pr="20px">
          <HStack color="#535D">
            <Text fontSize="14px">Total Portfolio Value</Text>
            <Icon as={AiOutlineInfoCircle} />
          </HStack>
          <HStack>
            <Text fontSize="24px" lineHeight="28px">
              {" "}
              ₹ 112,312.24
            </Text>
          </HStack>
        </Stack>
        <Stack>
          <HStack color="#535D66">
            <Text fontSize="14px">Wallet Balances</Text>
          </HStack>
          <HStack>
            <HStack pr="20px">
              <Text fontSize="24px" lineHeight="28px">
                {" "}
                22.39401000
              </Text>
              <Badge bg="#F3F3F7" color="#535D66">
                BTC
              </Badge>
            </HStack>
            <HStack>
              <Text fontSize="24px" lineHeight="28px">
                {" "}
                ₹ 1,300.00
              </Text>
              <Badge bg="#F3F3F7" color="#535D66">
                INR
              </Badge>
            </HStack>
          </HStack>
        </Stack>
      </HStack>

      <HStack>
        <Button
          bg="#5F00D9"
          color="white"
          fontWeight="bold"
          borderRadius="10px"
        >
          <AiOutlineArrowDown size={20} color="white" />
          Deposit
        </Button>

        <Button
          bg="#5F00D9"
          color="white"
          fontWeight="bold"
          borderRadius="10px"
        >
          <AiOutlineArrowUp size={20} color="white" />
          Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
