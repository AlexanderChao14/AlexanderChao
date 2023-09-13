import { Heading, Box, Link, Image, Badge} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import NextLink from 'next/link'

export const Title = ({ children }) => (
    <Box>
      <Link as={NextLink} href="/projects">
        Projects
      </Link>
      <span>
        {' '}
        <ChevronRightIcon />{' '}
      </span>
      <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
        {children}
      </Heading>
    </Box>
  )

  export const ProjectImage = ({ src, alt }) => (
    <Image borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
  )
  
  export const Meta = ({ children }) => (
    <Badge colorScheme="green" mr={2}>
      {children}
    </Badge>
  )