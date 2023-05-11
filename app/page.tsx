"use client";
import {Container, Flex} from '@chakra-ui/react';
import Details from '@/components/details';
import Cart from '@/components/cart';
const HomePage = ()=>{
  return (
    // <Container maxW="container.xl padding={0}">
    <Container maxWidth="container.xl" padding={0}>
      <Flex h={{base:'auto',md:'100vh'}} py={[0,10,20]} direction={{base:'column-reverse', md:'row'}}>
        <Details/>
        <Cart/>
      </Flex>
    </Container>
    
  );
}

export default HomePage;