import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getLorem } from './store/features/lorem/LoremSlice';
import { authentication } from './store/features/auth/authSlice';

function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.lorem)
  const auth = useSelector(state => state.auth)

  const user = {
    "email": "jone@supersimple.com",
    "password": "htJhone@2434"
  }


  useEffect(() => {
    // dispatch(getLorem())
    dispatch(authentication(user))
    // console.log(data);
  }, [])

  return (
    <div className="App">
      {JSON.stringify(auth)}
    </div>
  );
}

export default App;
