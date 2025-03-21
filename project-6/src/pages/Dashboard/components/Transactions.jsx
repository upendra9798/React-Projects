import { Button, Flex, Grid, Icon, Stack, Text } from '@chakra-ui/react';
import React, { Fragment } from 'react'
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa';

const Transactions = () => {
    const transactions = [
        {
          id: "1",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "2",
          icon: FaBtc ,
          text: "BTC  Sell",
          amount: "- 12.48513391 BTC",
          timestamp: "2022-06-09 7:06 PM",
        },
        {
          id: "3",
          icon: BsCurrencyRupee,
          text: "INR Deposit",
          amount: "+ ₹81,123.10",
          timestamp: "2022-06-09 7:06 PM",
        },
      ];
    
  return (
    <Stack bg="white" borderRadius="xl" p="6" h="full">
  <Text m fontSize="sm" color="#535D66">
    Recent Transactions
  </Text>
  <Stack>
    {transactions.map((transaction, i) => (
      <Flex
        key={transaction.id}
        gap="4"
        py="3"
        borderBottom={i !== transactions.length - 1 ? "1px solid #E2E8F0" : "none"}
    //ensures that all items except the last one get a light gray bottom border
      >
        <Grid placeItems="center" bg="#F3F3F7" boxSize={10} borderRadius="full">
          <Icon as={transaction.icon} />
        </Grid>
        <Flex justify="space-between" w="full">
          <Stack >
            <Text textStyle="h6">{transaction.text}</Text>
            <Text fontSize="sm" color="black.40">{transaction.timestamp}</Text>
          </Stack>
          <Text textStyle="h6">{transaction.amount}</Text>
        </Flex>
      </Flex>
    ))}
  </Stack>
  <Button w="full" bg="gray.300" _hover={{ bg: "gray.400" }}>
    View All
  </Button>
</Stack>

  )
}

export default Transactions