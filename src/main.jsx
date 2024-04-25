import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/main.scss'
import {store} from "./store/store.js"
import {Provider} from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store = {store}>
        <App />
    </Provider>
)
