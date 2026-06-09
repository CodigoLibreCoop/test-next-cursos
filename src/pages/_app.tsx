import { ChakraProvider } from '@chakra-ui/react'


/*
    This is the main component.
    Every page loads this component
*/

interface MyAppParams {
    Component: any; // aka Page
    pageProps: any;
}

function MyApp({ Component, pageProps }: MyAppParams) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
