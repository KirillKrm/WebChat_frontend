import * as React from 'react'
import * as ReactDOM from 'react-dom'

// Use consistent styling
// import 'sanitize.css/sanitize.css';//

import { App } from 'app'

ReactDOM.render(
  //research
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') as HTMLElement
)
