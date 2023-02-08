import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import HomPage from './component/Homepage'


function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <HomPage />
    </ChakraProvider>
  )
}

export default App;
