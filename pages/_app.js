import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../styles/theme";
import Fonts from "../components/fonts";
import { AnimatePresence } from "framer-motion";
import Footer from '../components/footer'

const Website = ({ Component, pageProps, router}) =>{
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}/>
            <AnimatePresence mode="wait" initial={true} zindex="1">
                <Component {...pageProps} key={router.route}/>
                <Footer/>
            </AnimatePresence>
        </ChakraProvider>
    )
}

export default Website;