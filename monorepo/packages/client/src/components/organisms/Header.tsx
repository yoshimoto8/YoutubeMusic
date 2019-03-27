/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'

export const Header: React.FC<any> = () => {
  return <div css={styles.container}>a</div>
}

const styles = {
  container: css`
    background-color: hotpink;
    &:hover {
      color: 'black';
    }
  `
}
