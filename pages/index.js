import { Container,Box, Heading, Image, useColorModeValue} from '@chakra-ui/react';
import Section from '../components/section'
import ParagraphBlock from '../components/paragraph_block';

const Index = () => {
  return(
    <Container maxW="container.lg">

      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.900', "gray.600")} p={3} mb={6} align="center">
        Hello there, my name is Alexander Chao and I am a software developer from Canada!
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">Alexander Chao</Heading>
          <p>Developer / Martial Artist / Geek and Video Game Enjoyer</p>
        </Box>
        <Box flexShrink={0} mt={{base:4,md:0}} ml={{md:6}} algin="center">
          <Image borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid" 
            maxW="100px" 
            display="inline-block" 
            borderRadius="full" 
            alt="Main Portfolio Pic" 
            src="TempProfilePic.jpg"/>
        </Box>  
      </Box>
      <Section delay={0.1}>
        <Heading as ="h3" variant="section-title">
          Test
        </Heading>
        <ParagraphBlock>
          Here are test words
        </ParagraphBlock>
      </Section>
    </Container>
  )
}
  

export default Index