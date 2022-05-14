import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Main } from './pages'
import { Header } from './components'
import { authSlice } from './store/reducers/authReducer'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    if(localStorage.getItem('token')) {
      dispatch(authSlice.actions.refreshUser())
    }  
  }, [])

  return (
    <div className='app'>
      <Header />
      <Main />
    </div>
  )
}

export default App
