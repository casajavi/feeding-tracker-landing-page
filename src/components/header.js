import * as React from "react"
import PropTypes from "prop-types"
import {
  Box,
  Link,
  HStack,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

const Header = ({ siteTitle }) => (
  // <Box
  //   style={{
  //     background: `#4671C6`,
  //   }}
  // >
  <Box bg="#4671C6" p={6}>
    <Box maxW="4xl" mx="auto" px={{ base: "0", lg: "12" }}>
      <Link
        to="/"
        color="white"
        fontWeight="bold"
        fontSize="lg"
        textDecor="none"
        textDecoration="none"
      >
        {siteTitle}
      </Link>
    </Box>
  </Box>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
