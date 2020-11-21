import axios from 'axios';
import { setAlert } from './alert';

import { 
  SIGNUP_SUCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './types';

export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({email, password});

  try {
    const res = await axios.post('http://localhost:8000/api/token/', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(setAlert('Authenticated successfully', 'success'))
  } catch(err){
    dispatch({
      type: LOGIN_FAIL
    })

    dispatch(setAlert('Error authenticating', 'error'));
  }

} 

export const signup = ({name, email, password, password2}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }

  const body = JSON.stringify({name, email, password, password2});

  try {
    const res = await axios.post('http://localhost:8000/api/accounts/signup/', body, config);

    dispatch({
      type: SIGNUP_SUCESS,
      payload: res.data
    });

    dispatch(login(email, password));

  } catch(err){
    dispatch({
      type: SIGNUP_FAIL
    })

    dispatch(setAlert('Error authenticating', 'error'));
  }
}  

export const logout = () => dispatch => {
  dispatch(setAlert('Logout successfully', 'success'));
  dispatch({type: LOGOUT})
} 