import { Container, Heading , SimpleGrid} from "@chakra-ui/react";
import Section from '../components/section'
import { ProjectsGridItem } from "../components/grid_item";
import Layout from "../components/layouts/article";

import EmojiThumbnail from '../public/images/projects/EmojiButtonThumbnail.png';
import SlingShotToUnlockThumbnail from '../public/images/projects/SlingShotToUnlockThumbnail.png';
import MazeToUnlockThumbnail from '../public/images/projects/MazeToUnlockThumbnail.jpg';
import IntelligentOperationsTriggerThumbnail from '../public/images/projects/IntelligentOperationsTriggerThumbnail.jpg';
import OurSpace from '../public/images/projects/OurSpaceThumbnail.jpg';

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
                    <ProjectsGridItem id="intelligent_operations_trigger" title="Intelligent Operations Trigger" thumbnail={IntelligentOperationsTriggerThumbnail} childern="A physical device designed to address the common everyday issue of pressing a button remotely, thereby saving time.">
                        Intelligent Operations Trigger
                    </ProjectsGridItem>
                </Section>
                <Section>
                    <ProjectsGridItem id="ourspace" title="OurSpace" thumbnail={OurSpace} childern="An online web applicaiton to help simulate online learning and better enhance talking to other in a room but online.">
                        OurSpace
                    </ProjectsGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
        
)

export default Projects