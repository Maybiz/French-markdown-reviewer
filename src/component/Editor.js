import React, { useEffect, useState, Fragment } from 'react'
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
	const startingText = `# Bienvenu sur mon editeur Markdown !
## C’est un heading H2
### Ici un heading H3 et pleins d’autres choses ci dessous …

Ici un peu de code, \`<div></div>\`, entre 2 backticks.

\`\`\`
// Ceci est un code sur plusieurs lignes:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
Il est aussi possible de faire du texte en **gras**... 
En _italique_.
Les **_deux_** ...
Ou même ~~complètement barré !~~

Il y a aussi des liens [links](https://www.ladreyt.fr), et les
> Citations !

Et si vous êtes un peu fou, des tableaux :

Header 1 | Header  2 | Encore un header ...
------------ | ------------- | ------------- 
Le contenu peut | être ici, ou il | peut être ici ....
Et ici. | Okay. | Je pense qu’on a compris !

- Et bien sûre il y a les listes
  - Certaines sont à puces.
     - Avec différents niveaux d’indentation.

1. Il y a les listes ordonnées aussi
1. Pour les utiliser, il faut juste écrire “1” !
1. Mais la liste continu ...
- Même si j’utilise - ou *
* Et pour finir : les images intégrées

![React Logo w/ Text](https://goo.gl/Umyytc)`

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
