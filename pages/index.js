import { Container,Box, Heading, Image, useColorModeValue, Button} from '@chakra-ui/react';
import Section from '../components/section'
import ParagraphBlock from '../components/paragraph_block';
import { ChevronRightIcon } from '@chakra-ui/icons';
import Layout from '../components/layouts/article';
import NextLink from 'next/link'

const Index = () => {
  return(
    <Layout>
      <Container>
        <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.900', "gray.600")} p={3} mb={6} align="center">
          Hello there, my name is Alexander Chao and I am a software developer from Canada!
        </Box>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">Alexander Chao</Heading>
            <p>Developer / Martial Artist / Video Game Enthusiast</p>
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

          <Box algin="center" my="4">
            <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
              My works
            </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
  

export default Index