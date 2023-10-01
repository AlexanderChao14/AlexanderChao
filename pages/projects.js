import { Container, Heading , SimpleGrid} from "@chakra-ui/react";
import Section from '../components/section'
import { ProjectsGridItem } from "../components/grid_item";
import Layout from "../components/layouts/article";

import EmojiThumbnail from '../public/images/projects/EmojiButtonThumbnail.png';
import SlingShotToUnlockThumbnail from '../public/images/projects/SlingShotToUnlockThumbnail.png';
import MazeToUnlockThumbnail from '../public/images/projects/MazeToUnlockThumbnail.jpg';
import IntelligentOperationsTriggerThumbnail from '../public/images/projects/IntelligentOperationsTriggerThumbnail.jpg';

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
                        Sling Shot To Unlock
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem id="maze_to_unlock" title="Maze To Unlock" thumbnail={MazeToUnlockThumbnail} childern="An alternative approach to unlocking a phone involves using machine learning and facial recognition to navigate a character through a maze to unlock a phone.">
                        Maze To Unlock
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem id="intelligent_operations_trigger" title="Intelligent Operations Trigger" thumbnail={IntelligentOperationsTriggerThumbnail} childern="A physical device to help solve the everyday problem ">
                        Intelligent Operations Trigger
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
        
)

export default Projects