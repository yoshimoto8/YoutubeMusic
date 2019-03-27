/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { Header } from '../organisms/Header'
import { SideBar } from '../organisms/SideBar'

export const Home = () => {
  return (
    <div>
      <Header />
      <div css={styles.contents}>
        <SideBar />
        <main>a</main>
      </div>
    </div>
  )
}

const styles = {
  container: css``,
  contents: css`
    display: flex;
  `,
  main: css``
}
