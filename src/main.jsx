import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App/>
// )

ReactDOM.hydrateRoot(document.getElementById('root'), <App />)
// ReactDOM.hydrate(<App />, document.getElementById('root'));
