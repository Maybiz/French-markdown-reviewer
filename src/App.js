import React from 'react'
import Editor from './component/Editor'
import Preview from './component/Preview'

const App = () => {
   return (
      <div className="app">
         <h1>Editeur Markdown</h1>
         <Editor />
         <Preview />     
      </div>
   )
}

export default App
