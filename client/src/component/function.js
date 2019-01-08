import axios from 'axios'


export const register = newUser => {
    return (axios('auth/join' , {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        data : JSON.stringify(newUser)
        })
        .then(res => {
            console.log(res)
        }))
}

export const Login_user = user => {
    return (axios('auth/login', {
        method : 'POST',
        headers : {'Content-Type' : 'application/json'},
        data : JSON.stringify(user)
        })
        .then(res => {
            localStorage.setItem('email', res.data.email)
            localStorage.setItem('nick', res.data.nick)
        })
        
    )}


export const Logout_user = () => {
    return (axios.get('auth/logout')
    .then(res => {
        if(res) {
            this.props.history.push('/')
        }
    })
)}


export const user_profile = () => {
    return (axios.get('/auth/profile')
    .then(res => console.log(res))
    )
}