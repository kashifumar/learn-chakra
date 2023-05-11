"use client";
import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";
import "../theme/styles.css";
export default function ChakraWrapper({children}:{children:any}){
  return(
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  );
}