import * as React from "react"
import {ChakraProvider} from "@chakra-ui/react"
import theme from "./Theme"
import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithHistory} from "./auth0-provider-with-history";

import {Router} from "./Router";

export const App = () => {
    return (
        <ChakraProvider theme={theme}>
            <BrowserRouter>
                <Auth0ProviderWithHistory>
                    <Router/>
                </Auth0ProviderWithHistory>
            </BrowserRouter>
        </ChakraProvider>
    )
}

