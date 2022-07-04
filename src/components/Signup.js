import { useSelector } from "react-redux"
import axios from "axios";
import { useHistory } from "react-router-dom";

function Signup() {
    let history = useHistory();



    function submitForm(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/user/create',
            {
                userName: event.target.userName.value,
                password: event.target.password.value
            })
            .then(response =>{
                history.push("/login");
            })
            .catch(err =>console.log('hi'))
    }

 const user = useSelector((state) => state.user);
    return (
        <div className="App">
            <h1>Login</h1>
            <h1>{user.userName}</h1>


            <form onSubmit={submitForm}>
                <div>
                    <label>userName : </label>
                    <input
                        type="text"
                        placeholder="Enter userName"
                        name="userName"
                        required
                    />
                    <label>Password : </label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        name="password"
                        required
                    />
                    <button type="submit">Singup</button>
                    <h1 >sorry your u cant login</h1>
                </div>
            </form>
        </div>
    );
}

export default Signup;
