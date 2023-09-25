import { Progress,Box} from "@chakra-ui/react";



export const SkillsBar = ({childern, progess}) => {
    return(
        <Box fontSize="18pt"  fontWeight="semibold">
            {childern}
            <Progress value={progess} ml={6} mr={6} mt={2} mb={2} size="lg" outline="solid" hasStripe={true} isAnimated={true} colorScheme="teal" borderRadius="3xl"/>
        </Box>
    )
}