import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index/index.js'

const IndexPagePreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate
          title={data.title}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  })
}

export default IndexPagePreview
