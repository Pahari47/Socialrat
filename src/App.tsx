import { Routes, Route } from 'react-router-dom'

import SigninForm from './auth/forms/SigninForm';
import SignupForm from './auth/forms/SignupForm';
import { Home } from './root/pages';
import AuthLayout from './auth/AuthLayout';
import RootLayout from './root/RootLayout';
import './globals.css';

const App = () => {
    return (
        <main className='flex h-screen'>
            <Routes>
                {/* Public Routes */}
                <Route element={<AuthLayout />}>
                    <Route path='/sign-in' element={<SigninForm />} />
                    <Route path='/sign-up' element={<SignupForm />} />
                </Route>

                {/* Privet Routes */}
                <Route element={<RootLayout />}>
                <Route index element={<Home />} />
                </Route>
            </Routes>
        </main>
    )
}

export default App
