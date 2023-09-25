import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Container, Heading } from '@chakra-ui/react'

const Contact = () => (
    <Layout title="Contact">
        <Container align="center">
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title" fontSize="28pt" my={4}>Contact Me</Heading>
                <Heading as="h3" fontSize="16pt" my={4}>Alexander Chao</Heading>
                <Heading as="h3" fontSize="16pt" my={4}>Calgary, Alberta, Canada</Heading>
                <Heading as="h3" fontSize="16pt" my={4}>chaoalexander45@gmail.com</Heading>
            </Section>
        </Container>
    </Layout>

)
export default Contact