import { Container, Heading , SimpleGrid} from "@chakra-ui/react";
import Section from '../components/section'
import { ProjectsGridItem } from "../components/grid_item";
import Layout from "../components/layouts/article";

import EmojiThumbnail from '../public/images/projects/EmojiButtonThumbnail.png';
import SlingShotToUnlockThumbnail from '../public/images/projects/SlingShotToUnlockThumbnail.png';

const Projects = () => (
    <Layout title="Projects">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Projects
            </Heading>
            <SimpleGrid columns={[1, 1, 2]} gap={6} >
                <Section>
                    <ProjectsGridItem id="emoji_button" title="The Emoji Button" thumbnail={EmojiThumbnail} childern="An application with just one button that tests your cognitive memory skills using emojis.">
                        The Emoji Button
                        {/* TODO: need to figure out text and childern problem, Test is not showing while Test3 is*/}
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem id="sling_shot_to_unlock" title="Sling Shot To Unlock" thumbnail={SlingShotToUnlockThumbnail} childern="An alternative approach to unlocking a phone involves using a slingshot to shoot at four pigs on the screen.">
                        Test2
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
        
)

export default Projects