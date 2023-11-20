import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './AppRoutes'

import './App.scss'

export const App = () => {
    return (
        <BrowserRouter>
            <AppRoutes/>
        </BrowserRouter>
    )
}
