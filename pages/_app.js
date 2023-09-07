import { ChakraProvider } from "@chakra-ui/react";
import Layout from '../components/layouts/main'
import theme from "../styles/theme";
import Fonts from "../components/fonts";

const Website = ({ Component, pageProps, router}) =>{
    return (
        <ChakraProvider theme={theme}>
            <Fonts/>
            <Layout router={router}/>
            <Component {...pageProps} key={router.route}/>
        </ChakraProvider>
    )
}

export default Website;