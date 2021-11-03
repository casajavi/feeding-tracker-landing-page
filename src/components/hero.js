import * as React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Image,
  Skeleton,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight"
import mainImage from "../images/baby-main.png"

const Hero = ({ heading, subheading }) => (
  <Box
    maxW="7xl"
    mx="auto"
    px={{ base: "0", lg: "12" }}
    py={{ base: "0", lg: "12" }}
  >
    <Stack
      direction={{ base: "column-reverse", lg: "row" }}
      spacing={{ base: "0", lg: "20" }}
    >
      <Box
        width={{ lg: "sm" }}
        transform={{ base: "translateY(-50%)", lg: "none" }}
        bg={{
          base: useColorModeValue("red.50", "gray.700"),
          lg: "transparent",
        }}
        mx={{ base: "6", md: "8", lg: "0" }}
        px={{ base: "6", md: "8", lg: "0" }}
        py={{ base: "6", md: "8", lg: "12" }}
      >
        <Stack spacing={{ base: "8", lg: "10" }}>
          <Stack spacing={{ base: "2", lg: "4" }}>
            <Heading size="xl" color={`#4671C6`}>
              {heading}
            </Heading>
            <Heading size="l" fontWeight="normal">
              {subheading}
            </Heading>
          </Stack>
          <HStack spacing="3">
            <Link color={`#4671C6`} fontWeight="bold" fontSize="lg">
              Click Here
            </Link>
            <Icon
              color={useColorModeValue("red.500", "red.300")}
              as={FaArrowRight}
            />
          </HStack>
        </Stack>
      </Box>
      <Flex flex="1" overflow="hidden">
        <Image
          src={mainImage}
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          minW="400px"
          objectFit="cover"
          flex="1"
        />
        <Image
          display={{ base: "none", sm: "initial" }}
          src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
          alt="Lovely Image"
          fallback={<Skeleton />}
          maxH="450px"
          objectFit="cover"
        />
      </Flex>
    </Stack>
  </Box>
)

Hero.propTypes = {
  heading: PropTypes.string,
  subheading: PropTypes.string,
}

Hero.defaultProps = {
  heading: ``,
  subheading: ``,
}

export default Hero
