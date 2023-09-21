import {Box} from '@chakra-ui/react'
import Section from './section'

const Footer = () => {
    return(
        <Section delay={0.4}>

            <Box align="center" opacity={0.5} fontSize="sm">
                &copy; {new Date().getFullYear()} Alexander Chao. All Rights Reserved.
            </Box>
        </Section>
    )
}

export default Footer