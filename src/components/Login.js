import { useSelector } from "react-redux"
import axios from "axios";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { userActionCreator } from "../state/index"
import { useHistory } from "react-router-dom";


function Login() {
    let history = useHistory();

    const dispatch = useDispatch();

    const {  setToken,setAuthentication } = bindActionCreators(userActionCreator, dispatch);

    function submitForm(event) {
        event.preventDefault();
        axios.post('http://localhost:3000/login',
            {
                userName: event.target.userName.value,
                password: event.target.password.value
            })
            .then(response =>{
                if(response.data!=='sorry'){
                    setToken(response.data)
                    axios.get('http://localhost:3000/tokenn/'+response.data)
                    .then(response => {
                        if(response.data!=='sorry! you are not login'){
                            setAuthentication({...response.data,auth:true})
                            history.push("/");


                        }
                    })

                }
            } )
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
                    <button type="submit">Login</button>
                    <h1 >sorry your u cant login</h1>
                </div>
            </form>
        </div>
    );
}

export default Login;
