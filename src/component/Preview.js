import React, { useState, useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import marked from 'marked'

const mapStateToProps = state => {
	return {
		input: state
	}
}

marked.setOptions({ breaks: true })

const Preview = props => {
	const [htmlMode, setHtmlMode] = useState(false)

	const handleMode = () => setHtmlMode(!htmlMode)

	useEffect(() => {
		const preview = document.getElementById('preview__content')

		!htmlMode ? (preview.innerHTML = marked(props.input.reducers)) : (preview.innerText = marked(props.input.reducers)) //innerText better than textContent for formating carriage return
	}, [htmlMode, props.input.reducers])

	marked.setOptions({
		breaks: true,
		headerIds: false
	})

	return (
		<Fragment>
			<div className="preview__header">
				<h2>Preview</h2>
				<div className="preview__header--htmlMode">
					<h4>Mode HTML</h4>
					<input type="checkbox" id="toggle" className="checkbox" onClick={handleMode} />
					<label htmlFor="toggle" className="switch"></label>
				</div>
			</div>

			<div id="preview__content"></div>
		</Fragment>
	)
}

export default connect(mapStateToProps, null)(Preview)
