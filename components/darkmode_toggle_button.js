import { IconButton, useColorModeValue, useColorMode} from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
    const{ toggleColorMode} = useColorMode()
    
    return(
        <IconButton aria-label='Toggle Dark and Light mode' 
        colorScheme={useColorModeValue('purple', 'orange')}
        icon={useColorModeValue(<MoonIcon/>, <SunIcon/>)}
        onClick={toggleColorMode}></IconButton>

    )
}

export default ThemeToggleButton