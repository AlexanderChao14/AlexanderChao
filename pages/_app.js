import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../styles/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";

const Website = ({ Component, pageProps, router}) =>{
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}/>
            <AnimatePresence mode="wait" initial={true} zindex="1">
                <Component {...pageProps} key={router.route}/>
            </AnimatePresence>
        </ChakraProvider>
    )
}

export default Website;