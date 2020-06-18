import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const mapStateToProps = state => {
	return {
		input: state
	}
}

const Preview = props => {
	return (
		<Fragment>
			<h2 className="preview__header">Preview</h2>
			<div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.input.reducers) }}></div>
		</Fragment>
	)
}

export default connect(mapStateToProps, null)(Preview)
