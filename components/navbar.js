import { 
    Container,
    Box,
    Link,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    useColorModeValue,
    IconButton,
    Text
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './darkmode_toggle_button'
import Logo from '../components/logo';
import { BsLinkedin, BsGithub } from 'react-icons/bs'



const LinkItem = ({href, path, childern}) =>{
    const active = path === href
    const inactiveColor = useColorModeValue('gray.800', 'whiteAlpha.900')
    return(
        
            <Link href={href} p={2} bg={active ? 'grassTeal': undefined} color={active? "#202023" : inactiveColor}>
                {childern}
            </Link>
        
    )

}

const Navbar = props => {
    const {path} =props

    return(
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}>
            <Container display="flex" p={2} wrap="wrap" align="center" justify="space-between">
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="lg" letterSpacing='tight'>
                        <Logo/>
                    </Heading>
                </Flex>

                <Stack direction={{base: 'column', md: 'row'}} display={{base: 'none', md:'flex'}} width={{base:'full', md: 'auto'}} alignItems="center" flexGrow={1} mt={{base: 4, md: 0}} >
                    <LinkItem href="/projects" path={path} childern="Projects" >Projects</LinkItem> {/*TODO: Might need to change/ remove the childern part */}
                    <LinkItem href="/resume" path={path} childern="Resume">Resume</LinkItem>
                    <LinkItem href="/contact" path={path} childern="Contact">Contact</LinkItem>
                    <LinkItem href="https://github.com/AlexanderChao14" path={path}  display="inline-flex" alignItems="center" childern={<BsGithub/>}s>
                        <BsGithub/>
                    </LinkItem>
                    <LinkItem href="https://linkedin.com/in/AlexanderChao14" path={path} display="inline-flex" alignItems="center" childern={<BsLinkedin/>}>
                        <BsLinkedin/>
                    </LinkItem>
                </Stack>
                <Box flex={1} align="right" >
                    <ThemeToggleButton/>
                    <Box ml={2} display={{base:'inline-block', md:'none'}}>
                        <Menu>
                            <MenuButton as={IconButton} icon={<HamburgerIcon/>} variant="outline" aria-label='Options'/>
                            <MenuList>                        
                                <MenuItem as={Link} href='/'>About</MenuItem>                       
                                <MenuItem as={Link} href='/projects'>Projects</MenuItem>
                                <MenuItem as={Link} href="/resume">Resume</MenuItem>
                                <MenuItem as={Link} href="/contact">Contact</MenuItem> 
                                <MenuItem as={Link} href="https://github.com/AlexanderChao14">
                                    <Text pr={2}>
                                        My Github 
                                    </Text>
                                    <BsGithub/>
                                </MenuItem>      
                                <MenuItem as={Link} href="https://linkedin.com/in/AlexanderChao14">
                                    <Text pr={2}>
                                        My Linkedin 
                                    </Text>
                                    <BsLinkedin/>    
                                </MenuItem>              
                            </MenuList>
                        </Menu>
                    </Box>
                </Box>
            </Container>
        </Box>  
    )
}

export default Navbar