import NextLink from 'next/link'
import {Box, Button, Container, Divider, Heading, Text} from '@chakra-ui/react'

const PageNotFound = () =>{
    return(
        <Container>
            <Heading as="h1">Page Not Found 🤷‍♂️</Heading>
            <Text>Oh looks like you are lost. The page you are looking for was not found.</Text>
            <Divider my={6}/>
            <Box my={6} align="center">
                <Button as={NextLink} href="/" colorScheme='teal'>
                    Click here to journey back to the main page. 🚗
                </Button>
            </Box>
        </Container>
    )
}

export default PageNotFound