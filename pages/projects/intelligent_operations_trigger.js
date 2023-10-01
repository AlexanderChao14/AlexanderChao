import {Container, Badge, List, ListItem, AspectRatio, Box} from '@chakra-ui/react'
import { Title, ProjectImage, Meta } from '../../components/project_description'
import ParagraphBlock from '../../components/paragraph_block'
import Layout from '../../components/layouts/article'

const Project = () => {
    return( 
        <Layout title="Maze to Unlock">
            <Container>
                <Title>
                Intelligent Operations Trigger <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    A physical   
                </ParagraphBlock>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Hardware</Meta>
                        <span> 3D Printing, Arduino, Stepper Motor, Battery Power Source, Wireless Chip, Smart Phone</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack and Software</Meta>
                        <span> C++, INO, Blynk.Cloud</span>
                    </ListItem>
                </List>
                <Box mb={4}>
                    <video autoPlay loop><source src="/images/projects/IntelligentOperationsTrigger1.mp4" type="video/mp4" /></video>
                </Box>
                <ProjectImage alt="Intelligent Operations Trigger" src="/images/projects/IntelligentOperationsTrigger2.jpg"/>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/vSFeuKJ0k3k" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/_5PfkaJiHaM" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project