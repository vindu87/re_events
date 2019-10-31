import { LOGIN_USER, LOGOUT_USER }  from './authConstants';

export const login = (creds) => {
    debugger;
    return {
        type: LOGIN_USER,
        paylaod: {
            creds
        }
    }
}

export const logout = () => {
    return {
        type: LOGOUT_USER
    }
}