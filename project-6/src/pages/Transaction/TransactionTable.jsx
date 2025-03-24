import { Badge, Stack, Table, Text, Box } from "@chakra-ui/react";

const TransactionTable = () => {
  const tableData = [
    { id: "HD82NA2H", date: "2023-06-20", time: "07:00 AM", type: "INR Deposit", tag: "E-Transfer", amount: "+₹81,123", status: "pending" },
    { id: "HD82NA4H", date: "2023-06-18", time: "07:00 AM", type: "INR Withdraw", tag: "Wire Transfer", amount: "-₹55,123", status: "processing" },
    { id: "HD82NA5H", date: "2023-06-18", time: "07:00 AM", type: "Buy", tag: "BTC", amount: "12.0554484 BTC", status: "cancelled" },
    { id: "HD82NA6H", date: "2023-06-18", time: "07:00 AM", type: "Sell", tag: "BTC", amount: "-2.0554484 BTC", status: "completed" },
    { id: "HD82NA7H", date: "2023-06-20", time: "07:00 AM", type: "BTC Deposit", amount: "+15.5000000", status: "pending" },
    { id: "HD82NA8H", date: "2023-06-18", time: "07:00 AM", type: "BTC Withdraw", amount: "-5.05555544", status: "completed" },
  ];

  const statusColor = {
    pending: "#797E82",
    processing: "#F5A50B",
    completed: "#059669",
    cancelled: "#DC2626",
  };

  return (
    <Box bg="white" p="4" borderRadius="md" width="100%" overflow="hidden" height="calc(100vh - 305px)" >
      <Table.Root width="100%" bg="white">
        <Table.Header bg="white"  >
          <Table.Row bg="white">
            <Table.ColumnHeader color="#535D66">ID</Table.ColumnHeader>
            <Table.ColumnHeader color="#535D66">Date & Time</Table.ColumnHeader>
            <Table.ColumnHeader color="#535D66">Type</Table.ColumnHeader>
            <Table.ColumnHeader color="#535D66">Amount</Table.ColumnHeader>
            <Table.ColumnHeader color="#535D66">Status</Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body bg="white">
          {tableData.map((data) => (
            <Table.Row key={data.id} bg="white">
              <Table.Cell>{data.id}</Table.Cell>
              <Table.Cell>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">{data.date}</Text>
                  <Text fontSize="xs" color="#797E82">{data.time}</Text>
                </Stack>
              </Table.Cell>
              <Table.Cell>
                <Stack spacing={0}>
                  <Text fontSize="sm" fontWeight="medium">{data.type}</Text>
                  {data.tag && <Text fontSize="xs" color="#797E82">{data.tag}</Text>}
                </Stack>
              </Table.Cell>
              <Table.Cell>{data.amount}</Table.Cell>
              <Table.Cell>
                <Badge bg={statusColor[data.status]} color="white" borderRadius="full">
                  {data.status}
                </Badge>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </Box>
  );
};

export default TransactionTable;
