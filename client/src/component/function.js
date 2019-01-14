import axios from 'axios'


export const register = newUser => {
    return (axios('auth/join' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        data : JSON.stringify(newUser)
        })
        .then(res => {
            alert(res.data)
        }))
}

export const Login_user = user => {
    return (axios('auth/login', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        data : JSON.stringify(user)
        })
        .then(res => {
            if(res.data.code === 400) {
                alert(res.data.message)
            } else {
            localStorage.setItem('email', res.data.email)
            localStorage.setItem('nick', res.data.nick)
            }
        })
        
    )}


export const Logout_user = () => {
    return (axios.get('auth/logout')
    .then(res => alert(res.data)))}



export const Getitem = () => {
    return (axios.get('api/scraping'))}

