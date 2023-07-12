import { createRoot } from 'react-dom/client'
import RouteContainer from './routes/routes'

export function App() {
  return <div>
    <RouteContainer/>
  </div>
}

const container = document.getElementById('root')!
const root = createRoot(container)

root.render(<App/>)
