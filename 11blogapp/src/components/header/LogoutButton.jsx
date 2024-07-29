import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwriter/auth.js'
import { logout } from '../../store/authSlice.js'


function LogoutButton() {
    const dispatch = useDispatch()
    
    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout());
        })
    }

  return (
    <button
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}>
        Logout
    </button>
  )
}


export default LogoutButton