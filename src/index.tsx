import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Use consistent styling
// import 'sanitize.css/sanitize.css';//

import MainPage from 'pages/index'

ReactDOM.render(
  //research
  <React.StrictMode>
    <MainPage />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
