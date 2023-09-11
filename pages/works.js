import { Container, Heading , SimpleGrid, Divider } from "@chakra-ui/react";
import Section from '../components/section'
import { WorkGridItem } from "../components/grid_item";
import Layout from "../components/layouts/article";

import test from '../public/images/works/test_image.png';
import test2 from '../public/images/works/test_image2.png';

const Works = () => (
        <Layout>
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6} >
                <Section>
                    <WorkGridItem id="test" title="Test" thumbnail={test} childern="Test3">
                        Test 
                        {/* TODO: need to figure out text and childern problem, Test is not showing while Test3 is*/}
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="test2" title="Test2" thumbnail={test2}>
                        Test2
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
        
)

export default Works