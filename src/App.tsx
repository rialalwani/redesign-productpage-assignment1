import { BrowserRouter } from 'react-router-dom'
import Theme from '@/components/template/Theme'
import Layout from '@/components/layouts'
import { AuthProvider } from '@/auth'
import Views from '@/views/Views'
import appConfig from './configs/app.config'
import './locales'
import Home from './views/Home'

if (appConfig.enableMock) {
    import('./mock')
}

function App() {
    return (
        <Theme>
            <BrowserRouter>
                <AuthProvider>
                    <Layout>
                        <Home />
                    </Layout>
                </AuthProvider>
            </BrowserRouter>
        </Theme>
    )
}

export default App
