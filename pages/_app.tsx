import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import customTheme from 'styles/customTheme'
import GlobalStyle from 'styles/global'
import '../styles/globalSass.scss'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <ColorModeProvider options={{initialColorMode: "dark", useSystemColorMode: false}}>
        <GlobalStyle>
          <Component {...pageProps} />
        </GlobalStyle>
      </ColorModeProvider>
    </ChakraProvider>
  )
}

export default MyApp
