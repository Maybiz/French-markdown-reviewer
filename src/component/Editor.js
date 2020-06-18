import React, { useState } from 'react'
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

const Editor = props => {

	const handleChange = e => {
		props.addNewInput(e.target.value)
	}

	return (
		<div>
			<textarea id="editor" value={props.input.reducers} onChange={handleChange}></textarea>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
