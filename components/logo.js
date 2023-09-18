import Link from 'next/link'
import { useColorModeValue, Text} from '@chakra-ui/react'
import styled from '@emotion/styled'
import BlobIcon from './icons/blob_icon'

const LogoArea = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    > svg {
    transition: 200ms ease;
    }

    &:hover > svg {
    transform: rotate(30deg);
    }
`

const Logo = () => {
    return(

        <Link href="/" scroll={false}>
            <LogoArea>
                <BlobIcon/>
                <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')} fontFamily='M PLUS Rounded 1c, san-serif' fontWeight="bold" fontSize={20} ml={2}>Alexander Chao</Text>
            </LogoArea>
        </Link>
    )
}

export default Logo