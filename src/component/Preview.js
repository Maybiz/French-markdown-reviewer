import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const mapStateToProps = state => {
	return {
		input: state
	}
}

const Preview = props => {

	const [htmlMode, setHtmlMode] = useState(false)

	const handleMode = () => setHtmlMode(!htmlMode)

	useEffect(() => {

		const preview = document.getElementById('preview')

		!htmlMode ? (preview.innerHTML = marked(props.input.reducers)) : (preview.textContent = marked(props.input.reducers))

	}, [htmlMode])

	

	return (
		<Fragment>
			<div className="preview__header">
				<h2>Preview</h2>
				<button className="htmlMode" onClick={handleMode}>Mode HTML</button>
			</div>
			
			<div id="preview" dangerouslySetInnerHTML={{ __html: marked(props.input.reducers) }}></div>
		</Fragment>
	)
}

export default connect(mapStateToProps, null)(Preview)
