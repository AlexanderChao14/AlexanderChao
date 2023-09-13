import { Container, Heading , SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { ProjectsGridItem } from "../components/grid_item";
import Layout from "../components/layouts/article";

import test from '../public/images/projects/test_image.png';
import test2 from '../public/images/projects/test_image2.png';

const Projects = () => (
        <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6} >
                <Section>
                    <ProjectsGridItem id="test_project" title="Test" thumbnail={test} childern="Test3">
                        Test 
                        {/* TODO: need to figure out text and childern problem, Test is not showing while Test3 is*/}
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem id="test2" title="Test2" thumbnail={test2}>
                        Test2
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
        
)

export default Projects