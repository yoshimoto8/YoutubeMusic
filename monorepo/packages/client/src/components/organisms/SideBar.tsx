/** @jsx jsx */
import * as React from 'react'
import { jsx, css } from '@emotion/core'

export const SideBar: React.FC<any> = () => {
  return (
    <div css={styles.container}>
      <ul css={styles.ul}>
        <li>Browse</li>
        <li>Post</li>
        <li>Radio</li>
      </ul>
    </div>
  )
}

const styles = {
  container: css`
    background-color: hotpink;
    height: 1000px;
  `,
  ul: css`
    margin: 0;
  `
}
