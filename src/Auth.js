import React, { createContext, useContext } from 'react'
import { useDispatch } from 'react-redux'
import { authentication, logout as logOut } from './store/features/auth/authSlice'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
    const dispatch =useDispatch()

    const login = async (loginData) => {
        dispatch(authentication(loginData))
    }

    const logout=()=>{
        dispatch(logOut())
    }

    return(
        <AuthContext.Provider value={{login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}
