import React, { useState, useEffect } from 'react'
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

const Editor = ({addNewInput, input}) => {

   const startingText = '# Welcome to my React Markdown Previewer!'

	const handleChange = e => {
		addNewInput(e.target.value)
   }
   
   useEffect(() => {
      addNewInput(startingText)
   }, [])

	return (
		<div>
			<textarea id="editor" value={input.reducers} onChange={handleChange}></textarea>
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor)
