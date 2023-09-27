import {Container, Badge, Link, List, ListItem} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project_description'
import ParagraphBlock from '../../components/paragraph_block'
import Layout from '../../components/layouts/article'

const Project = () => {
    return( 
        <Layout title="Test Project">
            <Container>
                <Title childern="Test Project">
                    The Emoji Button
                    <Badge>2021</Badge>
                </Title>
                <ParagraphBlock>
                    An application with just one button that tests your cognitive memory skills using emojis. 
                    The user will need to memorize the emojis that will appear on the screen. 
                    Afterwards, they will be questioned on how many times a certain emoji appeared in the memorization segment. 
                    They will then enter their answer by clicking the button to increment it to the desired number.
                </ParagraphBlock>
                <List ml={4} my={4}></List>
            </Container>
        </Layout>
    )
}

export default Project