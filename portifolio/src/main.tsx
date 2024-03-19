import React from 'react'
import ReactDOM from 'react-dom/client'
import Langs from './components/langsCard/langs.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Langs name="JavaScript" skill={70} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwT6GOttkvNb3hNFvB9y7yMr5gWarWatp-vnL4OwZL0g&s" />
    <Langs name="Python" skill={40} image="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" />
  </React.StrictMode>,
)
