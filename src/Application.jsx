import Nullstack from 'nullstack'

import '../tailwind.css'
import Home from './Home'
import Counter from './Counter'

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
      </head>
    )
  }

  render() {
    return (
      <body class="bg-gray-900 text-white font-roboto">
        <Head />
        <Home route="/" greeting="Welcome to Nullstack!" persistent />
        <Counter route="/counter" persistent />
      </body>
    )
  }
}

export default Application
