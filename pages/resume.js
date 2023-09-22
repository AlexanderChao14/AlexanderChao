import { Button, Container, Heading, Divider} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { HistoryDescription, HistorySubTitle, HistoryTitle, HistoryYear } from '../components/history'
import { mode } from '@chakra-ui/theme-tools'

const Resume = () => (

    <Layout title="Resume">
        <Container>
            <Section delay={0.2}>
                <Button align="center">
                    Download My Resume
                </Button>
                
                <Heading as="h3" variant="section-title">
                    Education
                </Heading>
                <HistoryTitle>
                    University of Calgary
                    <HistoryYear>2017 - 2023</HistoryYear>
                </HistoryTitle>
                <HistorySubTitle fontStyle="italic" fontWeight="medium">Bachelor of Science</HistorySubTitle>
                <HistoryDescription>
                    Major in Computer Science.
                </HistoryDescription>
                <Divider my={6}/>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Work History
                </Heading>
                <HistoryTitle>
                    Nutrien
                    <HistoryYear>2022</HistoryYear>
                </HistoryTitle>
                <HistorySubTitle fontStyle="italic" fontWeight="medium">Co-op, IT Digital Delivery</HistorySubTitle>
                <HistoryDescription>
                    Responsible for using 
                </HistoryDescription>
                <Divider my={6}/>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Skills
                </Heading>
                <Divider my={6}/>
            </Section>
        </Container>
    </Layout>
    
)

export default Resume