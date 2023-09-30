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
                    Maze to Unlock <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    An alternative approach to unlocking a phone involves using machine learning and facial recognition to navigate a character through a maze to unlock a phone. By looking in a certain direction, you will move the character in the direction you are facing. 
                    If you look to the left, the character will move left, and vice versa. Once the user enters the right sequence using this method, the phone will unlock.   
                </ParagraphBlock>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://the-maze-phone-unlock.glitch.me/">https://www.the-maze-phone-unlock.glitch.me/ <ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> Teachable Machine, JavaScript, HTML5, CSS, Python</span>
                    </ListItem>
                </List>
                <ProjectImage alt="Sling Shot To Unlock" src="/images/projects/MazeToUnlock1.JPG"/>
                <ProjectImage alt="Sling Shot To Unlock" src="/images/projects/MazeToUnlock2.JPG"/>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/qUHDNjmUHnA" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project