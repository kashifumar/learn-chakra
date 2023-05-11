import {FormControl, FormLabel, Input, Select, VStack, Heading, Text, Box, Image, SimpleGrid, GridItem, Button, 
  HStack, Stack, AspectRatio, Divider, useColorMode, useColorModeValue} from '@chakra-ui/react';
export default function Cart(){
  const {toggleColorMode} = useColorMode();
  const bgColor = useColorModeValue("gray.50", "whiteAlpha.50");
  const secondaryTextColor = useColorModeValue("gray.600","gray.400");
return (
  <VStack w="100%" h="100%" p={10} spacing={10} alignItems="flex-start" bg={bgColor}>
  
    <VStack spacing={3} alignItems="flex-start">
      <Heading as='h1' size='2xl'>Your cart</Heading>
      <Text>
        If price is too hard on your eyes, try changing the theme.
        <Button onClick={toggleColorMode} variant="link" colorScheme={secondaryTextColor}>
          try changing the theme
        </Button>
      </Text>
    </VStack>
    
    <HStack spacing={6} alignItems="center" w="100%">
      <AspectRatio ratio={1} w={24}>
        <Image src="https://bit.ly/dan-abramov" alt="Box"/>
      </AspectRatio>

      <Stack spacing={0} w="100%" direction="row" justifyContent="space-between" alignItems="center">
        <VStack w="100%" h="100%" spacing={10} alignItems="flex-start">
          <Heading size='2md'>Penny board</Heading>
          <Text color={secondaryTextColor}>PNYCOMP27541</Text>
        </VStack>
        <Heading size="sm" textAlign="end">$119.00</Heading>
      </Stack>
    </HStack>

    <VStack spacing={4} alignItems="stretch" w="100%">
      <HStack justifyContent="space-between">
        <Text color={secondaryTextColor}>Subtotal</Text>
        <Heading size="sm">$119.00</Heading>
      </HStack>
      
      <HStack justifyContent="space-between">
        <Text color={secondaryTextColor}>Shipping</Text>
        <Heading size="sm">$19.00</Heading>
      </HStack>

      <HStack justifyContent="space-between">
        <Text color={secondaryTextColor}>Taxes (estimated)</Text>
        <Heading size="sm">$23.80</Heading>
      </HStack>

      <Divider/>
      <HStack justifyContent="space-between">
        <Text color={secondaryTextColor}>Total</Text>
        <Heading size="sm">$162.79</Heading>
      </HStack>

    </VStack>
   
  </VStack>

);
}