import { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
import '../styles/globals.scss'
import {AppContextWrapper} from '../utils/context'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme} >
      <AppContextWrapper>
        <Component {...pageProps} />
      </AppContextWrapper>
    </ThemeProvider>
  )
}

export default MyApp
