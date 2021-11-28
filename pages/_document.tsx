import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { ColorModeScript } from '@chakra-ui/react';

export default class MyDocument extends NextDocument {
    render() {
        return(
            <Html lang="en">
                <Head />
                <link rel="icon" type="image/png" href="/images/logo.png" />
                <body>
                    <svg height="0" width="0">
                        <defs>
                            <marker 
                                id="arrow_closed_light"
                                markerWidth="12.5"
                                markerHeight="12.5"
                                viewBox="-10 -10 20 20"
                                orient="auto"
                                refX="0"
                                refY="0">
                                <polyline stroke-linecap="round" stroke-linejoin="round" stroke-width="1" points="-5,-4 0,0 -5,4 -5,-4"/>
                            </marker>
                            <marker 
                                id="arrow_closed_dark"
                                markerWidth="12.5"
                                markerHeight="12.5"
                                viewBox="-10 -10 20 20"
                                orient="auto"
                                refX="0"
                                refY="0">
                                <polyline stroke-linecap="round" stroke-linejoin="round" stroke-width="1" points="-5,-4 0,0 -5,4 -5,-4"/>
                            </marker>

                            <marker 
                                id="arrow_open_dark"
                                markerWidth="12.5"
                                markerHeight="12.5"
                                viewBox="-10 -10 20 20"
                                orient="auto"
                                refX="0"
                                refY="0">
                                <polyline stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" points="-5,-4 0,0 -5,4"/>
                            </marker>
                            <marker 
                                id="arrow_open_light"
                                markerWidth="12.5"
                                markerHeight="12.5"
                                viewBox="-10 -10 20 20"
                                orient="auto"
                                refX="0"
                                refY="0">
                                <polyline stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" fill="none" points="-5,-4 0,0 -5,4"/>
                            </marker>                                                           
                        </defs>
                    </svg>                    
                    <ColorModeScript/>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        )
    }
}