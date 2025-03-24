import React from "react";
import DashboardLayout from "../../component/DashboardLayout";
import { AiOutlineDownload } from "react-icons/ai";
import {
  Tabs,
  Flex,
  Button,
  Box,
  HStack,
  Text,
  Tag,
  Icon,
  Badge,
} from "@chakra-ui/react";
import TransactionTable from "./TransactionTable";
import { Input, InputGroup, Kbd } from "@chakra-ui/react";
import { LuSearch } from "react-icons/lu";

const TransactionPage = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="2" mb="3">
        <Button
          bg="#5F00D9"
          color="white"
          fontWeight="bold"
          borderRadius="10px"
        >
          <Icon as={AiOutlineDownload} />
          Export CSV
        </Button>
      </Flex>
      <Box bg="white" p="4" borderRadius="md" boxShadow="sm" w="full">
        <Tabs.Root
          variant="enclosed"
          w="full"
          defaultValue={tabs[0]?.name || "tab-1"}
        >
          <Flex w="full" justify="space-between" align="center">
            <HStack spacing="4">
              {tabs.map((tab) => (
                <Tabs.Trigger key={tab.name} value={tab.name}>
                  {tab.name}
                  <Badge colorScheme="gray" borderRadius="full" ml="2">
                    {tab.count}
                  </Badge>
                </Tabs.Trigger>
              ))}
            </HStack>


              <InputGroup flex="1" maxW="200px" startElement={<LuSearch />}>
                <Input placeholder="Search..." />
              </InputGroup>
          </Flex>

          <Box mt="4" p="4" border="1px solid #ddd" w="full">
            {tabs.map((tab) => (
              <Tabs.Content key={tab.name} value={tab.name}>
                <TransactionTable />
              </Tabs.Content>
            ))}
          </Box>
        </Tabs.Root>
      </Box>
    </DashboardLayout>
  );
};

export default TransactionPage;
