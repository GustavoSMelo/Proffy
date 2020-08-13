import Document, { Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import Global from '../styles/styledGlobal'

class MyDocument extends Document {
  /*static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />))

    const styleTags = sheet.getStyleElement()

    return { ...page, ...styleTags }
  }*/
  render() {
    return (
      <html>
        <head>
          <title>Proffy</title>
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

export default MyDocument
