import React from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const mapStateToProps = state => {
	return {
		input: state
	}
}

const Preview = props => {
	return <div dangerouslySetInnerHTML={{ __html: marked(props.input.reducers) }} id="preview"></div>
}

export default connect(mapStateToProps, null)(Preview)
