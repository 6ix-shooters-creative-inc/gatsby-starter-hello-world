import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'


export const IndexPageTemplate = ({title}) => (
  <div>
    {title}
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <IndexPageTemplate title={frontmatter.title} />
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage


