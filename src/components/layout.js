import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'


import './layout.css'
import Appbar from './Appbar';


const Layout = ({ children , location }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            desc
          }
        }

        background: file(relativePath: { eq: "wall1.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(width: 1240,height:500) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={(data) => (
      
      <React.Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Appbar data={data} location={location}/>
        <div
          style={{
            margin: '0 auto',
            maxWidth: 960,
            padding: '0px 1.0875rem 1.45rem',
            paddingTop: 0,
          }}
        >
        <h1>{location}</h1>
          {children}
        </div>
      </React.Fragment>
    )}
  />
)


Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout



