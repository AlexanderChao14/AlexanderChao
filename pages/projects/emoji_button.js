import {Container, Badge, Link, List, ListItem, AspectRatio} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project_description'
import ParagraphBlock from '../../components/paragraph_block'
import Layout from '../../components/layouts/article'

const Project = () => {
    return( 
        <Layout title="The Emoji Button">
            <Container>
                <Title>
                    The Emoji Button <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    An application with just one button that tests your cognitive memory skills using emojis. 
                    The user will need to memorize the emojis that will appear on the screen. 
                    Afterwards, they will be questioned on how many times a certain emoji appeared in the memorization segment. 
                    They will then enter their answer by clicking the button to increment it to the desired number.
                </ParagraphBlock>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://the-emoji-memory-game.netlify.app/"> https://www.the-emoji-memory-game.netlify.app/<ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>JavaScript, HTML5, CSS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Github</Meta>
                        <Link href="https://github.com/BryanHuynh/Memory-Test-JS" target='_blank'> The Emoji Button Github Source<ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                </List>
                <ProjectImage alt="The Emoji Button" src="/images/projects/EmojiButton1.png"/>
                <ProjectImage alt="The Emoji Button" src="/images/projects/EmojiButton2.JPG"/>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/H2CArrkxUno" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project