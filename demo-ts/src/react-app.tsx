import {
  useState
} from 'react'
import ReactDOM from 'react-dom';

export const App = () => {
  const [state] = useState(0)
  return <div>{state}</div>
}

const app = document.getElementById('#app')

ReactDOM.render(<App/>, app);