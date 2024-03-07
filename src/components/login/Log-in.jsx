import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import './login.css'

const Login = ({ handleAccounts }) => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [agreed, setAgreed] = useState(false)
    const navigate = useNavigate()

    const handleChecked = (e) => {
        if (e.target.checked) {
            setAgreed(true)
        } else {
            setAgreed(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        const findUser = handleAccounts.find((user) => user.username === username && user.password === password && user.isAdmin === true)

        if (findUser) {
            navigate('/home')
        } else {
            navigate('/user')
        }
    }


    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handleSubmit} className="form-login">
                <label>Username</label>
                <input
                    className="input-login"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input
                    className="input-login"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <div>I agree with the terms and condition</div>
                <input
                    className="input-login"
                    type="checkbox"
                    required
                    value={agreed}
                    onChange={handleChecked}
                    style={{float: 'left'}}
                />
                <button>Login</button>
                <Link to='/'>
                    <button className="button-login">Cancel</button>
                </Link>
            </form>
        </div>
    );
}

export default Login;