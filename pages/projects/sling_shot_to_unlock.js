import {Container, Badge, Link, List, ListItem, AspectRatio} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project_description'
import ParagraphBlock from '../../components/paragraph_block'
import Layout from '../../components/layouts/article'

const Project = () => {
    return( 
        <Layout title="Sling Shot To Unlock">
            <Container>
                <Title>
                    Sling Shot To Unlock
                    <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    An alternative approach to unlocking a phone involves using a slingshot to shoot at four pigs on the screen. Once the user enters the correct sequence of pigs by hitting them with the sling shot, the phone will then unlock.  
                </ParagraphBlock>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://slingshotpigs.netlify.app"> https://wwww.slingshotpigs.netlify.app<ExternalLinkIcon mx="2px"/></Link>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span> React.js, JavaScript, HTML5, CSS</span>
                    </ListItem>
                </List>
                <ProjectImage alt="Sling Shot To Unlock" src="/images/projects/SlingShotToUnlock1.JPG"/>
                <ProjectImage alt="Sling Shot To Unlock" src="/images/projects/SlingShotToUnlock2.JPG"/>
                <AspectRatio maxW="100%" ratio={1.75} my={4}>
                    <iframe src="https://www.youtube.com/embed/xXsopoUNjSE" title="YouTube video player" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen/>
                </AspectRatio>
            </Container>
        </Layout>
    )
}

export default Project