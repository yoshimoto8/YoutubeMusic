/** @jsx jsx */
import { jsx } from '@emotion/core'
import { storiesOf } from '@storybook/react'
import { Home } from './Home'

storiesOf('pages/Home', module).add('basic', () => <Home />)
