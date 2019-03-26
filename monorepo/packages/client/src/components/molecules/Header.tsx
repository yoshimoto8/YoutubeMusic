import * as React from 'react'
import styled from '@emotion/styled'

export const Header: React.FC<any> = () => {
  return <HeaderComponent>a</HeaderComponent>
}

const HeaderComponent: React.FC = styled.div`
  display: 'flex',
  justifyContent: 'space-around'
`
