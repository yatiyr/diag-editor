import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
    render() {
        return(
            <Html lang="en">
                <Head />
                <link rel="icon" type="image/png" href="/images/logo.png" />
                <body>
                    <ColorModeScript/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}