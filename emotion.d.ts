import '@emotion/react'

declare module '@emotion/react' {
  export interface Theme {
    color: {
      primary: string,
      secondary: string,
      terciary: string,
      dark: string,
      light: string,
    }
  }
}

// You are also able to use a 3rd party theme this way:
import '@emotion/react'
import { LibTheme } from 'some-lib'

declare module '@emotion/react' {
  export interface Theme extends LibTheme {}
}