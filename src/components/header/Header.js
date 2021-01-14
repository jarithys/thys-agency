import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import {HeaderWrapper} from './headerStyles/headerStyles'

const Header = ({ siteTitle }) => {
  const {
    wpcontent: { menuItems },
  } = useStaticQuery(graphql`
  query {
    wpcontent {
      menuItems {
        edges {
          node {
            label
            path
          }
        }
      }
    }
  }
  `)

  console.log(menuItems, "menu items");
  return <HeaderWrapper>
    <Menu menuItems={menuItems.edges}></Menu>
  </HeaderWrapper>
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
