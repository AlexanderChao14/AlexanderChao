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
            About Me
          </Heading>
          <ParagraphBlock>
            I'm a Computer Science graduate from the University of Calgary. I enjoy working in front-end development and 
            web development, but I am open to working in new areas of Computer Science as I am eager to alway learn new skills. 
            Back-end development and machince learning are just a few area of interests that I am open to explore.{/*Might take out this line or 3rd sentence  */}
            
          </ParagraphBlock>  
          <Box pt={8}></Box>
          <ParagraphBlock>
            Some of the hobbies that I enjoy during my past time outside of software development are playing video games, learning martial arts, working outing at the gym, fishing and traveling the world.  
          </ParagraphBlock>

          <Box algin="center" my="4">
            <NextLink href="/projects">
            <Button rightIcon={<ChevronRightIcon/>} colorScheme='teal'>
              My projects
            </Button>
            </NextLink>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
  

export default Index