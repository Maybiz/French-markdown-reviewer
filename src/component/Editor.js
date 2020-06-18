import React, { useEffect, Fragment } from 'react'
import { connect } from 'react-redux'
import addInput from '../actions/actions'

const mapStateToProps = state => {
	return {
		input: state
	}
}

const mapDispatchToProps = dispatch => {
	return {
		addNewInput: input => {
			dispatch(addInput(input))
		}
	}
}

const Editor = ({ addNewInput, input }) => {
	const startingText = '# Welcome to my React Markdown Previewer!'

	const handleChange = e => {
		addNewInput(e.target.value)
	}

	useEffect(() => {
		addNewInput(startingText)
	}, [])

	return (
		<Fragment>
			<h2 className="editor__header">Editeur</h2>
			<textarea id="editor" value={input.reducers} onChange={handleChange}></textarea>
		</Fragment>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
