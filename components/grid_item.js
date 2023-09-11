import NextLink from 'next/link'
import Image from 'next/image'
import {Box, Text, LinkBox, LinkOverlay} from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItems = ({childern, href, title, thumbnail}) => (
    <Box w="100%" align="center">
        <LinkBox cursor="pointer">
            <Image src={thumbnail} alt={title} className="grid_item_thumbnail" placeholder='blur' loading='lazy'/>
            <LinkOverlay href={href} target='_blank'>
                <Text mt={2}>{title}</Text>
            </LinkOverlay>
            <Text fontSize={14}>{childern}</Text>
        </LinkBox>
    </Box>
)

export const WorkGridItem = ({childern, id, title, thumbnail}) =>(
    <Box w="100%" align="center">
            <LinkBox as={NextLink} cursor="pointer" href={`/works/${id}`}>
                <Image src={thumbnail} alt={title} className="grid_item_thumbnail" placeholder='blur'/>
                <LinkOverlay href={`/works/${id}`}>
                    <Text mt={2} fontSize={20}>{title}</Text>
                </LinkOverlay>
                <Text fontSize={14}>{childern}</Text>
            </LinkBox>
    </Box>
)

export const GridItemStyle = () => (
    <Global
      styles={`
        .grid_item_thumbnail {
          border-radius: 14px;
        }
      `}
    />
  )