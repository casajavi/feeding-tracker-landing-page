import * as React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import Seo from "../components/seo"
import { Link } from "@chakra-ui/react"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero
      heading="Feeding Tracker App"
      subheading="Bacon ipsum dolor amet shankle prosciutto kielbasa chicken, meatball beef jerky spare ribs short loin pig hamburger. Hamburger porchetta tail sausage rump prosciutto spare ribs, pig t-bone tongue turducken corned beef boudin drumstick pancetta. Ground round beef ribs fatback swine pork loin meatball ham meatloaf sausage. Doner cow porchetta, meatloaf sirloin pastrami filet mignon t-bone leberkas shoulder buffalo strip steak flank burgdoggen. Strip steak venison turkey ham short ribs short loin ball tip pork ground round tongue porchetta chuck salami."
    />
  </Layout>
)

export default IndexPage
