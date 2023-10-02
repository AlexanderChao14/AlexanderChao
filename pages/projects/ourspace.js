import {Container, Badge, Link, List, ListItem, AspectRatio} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project_description'
import ParagraphBlock from '../../components/paragraph_block'
import Layout from '../../components/layouts/article'

const Project = () => {
    return( 
        <Layout title="Maze to Unlock">
            <Container>
                <Title>
                   OurSpace <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    An online web applicaiton to help simulate online learning and better enhance talking to other in a room but online. You would receive chat messages only from people who are within your speaking range, simulating a real room setting.
                    You can increase or decrease the speaking range to your desired size and move your character anywhere in the room to speak to anyone you want, simulating in-person conversations within a room.
                </ParagraphBlock>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://proximity-chat-00.netlify.app/">https://www.proximity-chat-00.netlify.app/ <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> React.js, JavaScript, HTML5, CSS</span>
                    </ListItem>
                </List>
                <ProjectImage alt="OurSpace" src="/images/projects/OurSpace1.jpg"/>
                <ProjectImage alt="OurSpace" src="/images/projects/OurSpace2.jpg"/>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/H7sHvHUbW_g" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/W4pxebDk2Gk" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project