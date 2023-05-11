import {FormControl, FormLabel, Input, Select, VStack, Heading, Text, Checkbox, Button, SimpleGrid, 
  GridItem, useBreakpointValue} from '@chakra-ui/react';
export default function Details(){
  const colSpan = useBreakpointValue({base:2, md:1});
return (
  <VStack w="100%" h="100%" p={10} spacing={10} alignItems="flex-start">
    <VStack spacing={3} alignItems="flex-start">
      <Heading as='h1' size='2xl'>Your details</Heading>
      <Text>If you already have an account, click here to log in.</Text>
    </VStack>

    <SimpleGrid columns={2} columnGap={3} rowGap={6}>
      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input placeholder='John'/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Last Name</FormLabel>
          <Input placeholder='Doe'/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
          <FormLabel>Address</FormLabel>
          <Input placeholder='xyz Street'/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>City</FormLabel>
          <Input placeholder='Lahore'/>
        </FormControl>
      </GridItem>

      <GridItem colSpan={colSpan}>
        <FormControl>
          <FormLabel>Country</FormLabel>
          <Select>
            <option value="usa">USA</option>
            <option value="uae">UAE</option>
            <option value="uk">UK</option>
          </Select>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
          <Checkbox defaultChecked>Ship to Billing</Checkbox>
        </FormControl>
      </GridItem>

      <GridItem colSpan={2}>
        <FormControl>
        {/* <Button size="lg" w="100%" colorScheme="brand">Place Order</Button> */}
        <Button size="lg" w="100%" variant="primary">Place Order</Button>
        </FormControl>
      </GridItem>

    </SimpleGrid>
  </VStack>

);
}