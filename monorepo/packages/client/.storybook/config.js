import { configure, addDecorator } from '@storybook/react'
import { configureViewport } from '@storybook/addon-viewport'
import { withOptions } from '@storybook/addon-options'
import { withKnobs } from '@storybook/addon-knobs'
import { withPropsTable } from 'storybook-addon-react-docgen'

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.tsx?$/)
  req.keys().forEach(story => req(story))
}

addDecorator(withKnobs({ escapeHTML: false }))

addDecorator(
  withOptions({
    addonPanelInRight: true
  })
)

addDecorator(withPropsTable({}))

addDecorator(withPropsTable({}))

configure(loadStories, module)
configureViewport({
  defaultViewport: 'Responsive'
})
