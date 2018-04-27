import CMS from 'netlify-cms'

// Now the registry is available via the CMS object.
CMS.registerPreviewTemplate('my-template', MyTemplate)

import './index.css'

import React from 'react'
import {render} from 'react-dom'

import App from './App'

render(<App/>, document.querySelector('#app'))
