import React, {Fragment} from 'react'
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
		<div className="editor--preview"><h2>Preview</h2></div>
		<div dangerouslySetInnerHTML={{ __html: marked(props.input.reducers) }} id="preview"></div>
	</Fragment>
	
	)
}

export default connect(mapStateToProps, null)(Preview)
