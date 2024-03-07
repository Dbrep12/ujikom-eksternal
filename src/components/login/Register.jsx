import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './register.css'

const Register = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [isAdmin, setIsAdmin] = useState()
    const navigate = useNavigate()


    const handleChecked = (e) => {
        if (e.target.checked) {
            setIsAdmin(true)
        } else {
            setIsAdmin(false)
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const user = { username, password, isAdmin };

        fetch("http://localhost:3030/user", {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        }).then(() => {
            navigate('/login')
        })

    }
    return (
        <div className="register">
            <h2>Register</h2>
            <form onSubmit={handleSubmit} className="form-register">
                <label>Username</label>
                <input
                    className="input-register"
                    type="text"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />
                <label>Password</label>
                <input
                    className="input-register"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
                <label>Admin</label>
                <input
                    type="checkbox"
                    value={isAdmin}
                    onChange={handleChecked}
                />
                <button>Create account</button>
            </form>
            <div>
                <p>Already have an account?</p><Link to="/login" style={{color: 'blue'}}>Login</Link>
            </div>

        </div>);
}

export default Register