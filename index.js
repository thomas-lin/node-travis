import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import Headline from './src/components/Headline'

let title = "Hello Node";

render(
  <Headline text={title} />,
  document.getElementById('body')
)
