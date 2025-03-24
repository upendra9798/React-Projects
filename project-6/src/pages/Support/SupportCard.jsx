import React from "react";
import {
  Box,
  Button,
  Checkbox,
  Field,
  Fieldset,
  Flex,
  HStack,
  Icon,
  Input,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
import { AiTwotoneMessage } from "react-icons/ai";
import InfoCard from "../Dashboard/components/InfoCard"

const SupportCard = () => {
  return (
    <Stack>
    <Flex
      gap={6}
      justify="space-between"
      flexDir={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxW="24rem">
        <Icon as={IoMdMail} boxSize={6} color="#5F00D9" />
        <Text
          fontWeight="medium"
          fontSize={{
            base: "30px",
            md: "32px",
          }}
          color="#171717"
          lineHeight={{
            base: "34px",
            md: "36px",
          }}
        >
          Contact Us
        </Text>
        <Text fontSize="sm" color="#797E82">
        Have a question or just want to know more? Feel free to reach out to us.
        </Text>
      </Stack>

      <Box p="6" borderRadius="1rem" bg="white" maxW="550px" w="full">
        <Stack>
        <Text fontWeight="medium" fontSize="sm">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack mt="3"
          flexDir={{
            base: "column",
            xl: "row",
          }}
          >
          <Fieldset.Root size="lg" mr="7">
          <Field.Root>
              <Field.Label fontSize="">Name</Field.Label>
              <Input placeholder="Enter Your Name.."
             css={{ "--focus-color": "#5F00D9" }}
              />
            </Field.Root>
          </Fieldset.Root>

          <Fieldset.Root size="lg" >
            <Field.Root>
              <Field.Label>Surname</Field.Label>
              <Input placeholder="Enter Your Surname.." 
             css={{ "--focus-color": "#5F00D9" }}
              />
            </Field.Root>
          </Fieldset.Root>
        </HStack>

        <Fieldset.Root size="lg" mt="3">
          <Field.Root>
            <Field.Label>Email</Field.Label>
            <Input type="email" placeholder="Enter Your Email.."
             css={{ "--focus-color": "#5F00D9" }}
            />
          </Field.Root>
          <Field.Root>
            <Field.Label>Messages</Field.Label>
            <Textarea placeholder="Your message"
             css={{ "--focus-color": "#5F00D9" }}
             minH="70px"
             />
          </Field.Root>
        </Fieldset.Root>

        <Checkbox.Root mt="3">
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label>I agree with  
            <Box as="span" color = "#5F00D9">
              {" "} 
      {/* {" "} - For providing spacing btw text  */}
            Terms & Conditions.
            </Box>
          </Checkbox.Label>
        </Checkbox.Root>

        <Stack mt="3">
          <Button  bg="gray.500">Send a Message</Button>
          <Button bg="gray.300">Book a Meeting</Button>
        </Stack>
        </Stack>
      </Box>
    </Flex>

<Flex justifyContent="space-between" mt="8"
 flexDir={{
  base: "column",
  xl: "row",
}}
>
<Stack maxW="24rem" >
<Icon as={AiTwotoneMessage} boxSize={6} color="#5F00D9" />
<Text
  fontWeight="medium"
  fontSize={{
    base: "30px",
    md: "32px",
  }}
  color="#171717"
  lineHeight={{
    base: "34px",
    md: "36px",
  }}
>
 Live Chat
</Text>
<Text fontSize="sm" color="#797E82">
Don't have time to wait for the answer? Chat with us now.</Text>
</Stack>

<Box w="49%" >
<InfoCard
            inverted={true}
            tagText="Chatbot"
            imgUrl="/grid_bg.svg"
            text="Chat with us now"
          />
          </Box>
</Flex>
</Stack>

  );
};

export default SupportCard;
