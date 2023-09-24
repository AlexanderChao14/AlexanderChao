import { Button, Container, Heading, Divider, Box, VStack} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { HistoryDescription, HistorySubTitle, HistoryTitle, HistoryYear } from '../components/history'
import {DownloadIcon} from '@chakra-ui/icons'
import { SkillsBar } from '../components/skills_bar'

const Resume = () => (

    <Layout title="Resume">
        <Container>
            <Section delay={0.2}>
                <Box align="center">
                    <Button colorScheme='teal' rightIcon={<DownloadIcon/>}>
                        Download Resume 
                    </Button>
                </Box>
                
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
                    Responsible for using tools such as React.js, TypeScript, npm, and Google Analytics to complete tickets for a large-scale application related to Front-End enchancements and Google Analytics tagging. 
                    Also responsible for implementing a SharePoint site application that record usage for large scale applications to allow Product Owners and Directors to use the usage metric for business meetings.
                </HistoryDescription>
                <Divider my={6}/>
            </Section>
            <Section delay={0.4}>
                <Heading as="h3" variant="section-title">
                    Skills
                </Heading>
                <HistorySubTitle align="center">Some of the technologies that I am proficient with</HistorySubTitle>
                <VStack align="stretch">
                    
                    <SkillsBar progess={87} childern={"JavaScript"}/>
                    <SkillsBar progess={95} childern={"HTML & CSS"}/>
                    <SkillsBar progess={75} childern={"ReactJs"}/>
                    <SkillsBar progess={77} childern={"NextJs"}/>
                    <SkillsBar progess={77} childern={"Git"}/>
                    
                </VStack>
                <Divider my={6}/>
            </Section>
        </Container>
    </Layout>
    
)

export default Resume