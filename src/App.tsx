import { ThemeProvider } from 'styled-components'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <RouterProvider router={router}/>

      <GlobalStyle />
    </ThemeProvider>
  )
}
