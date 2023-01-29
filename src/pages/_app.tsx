import { THEME } from "@chakra/theme";
import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={THEME}>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}
