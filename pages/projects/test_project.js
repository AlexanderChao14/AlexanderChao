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
                    Test Project
                    <Badge>2023</Badge>
                </Title>
                <ParagraphBlock>
                    A test project detail page 
                </ParagraphBlock>
                <List ml={4} my={4}></List>
            </Container>
        </Layout>
    )
}

export default Project