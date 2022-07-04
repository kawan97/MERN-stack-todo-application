import { useSelector } from "react-redux"
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { postActionCreator } from "../state/index"


function Create() {
    let history = useHistory();
    const user = useSelector((state) => state.user);
    const dispatch = useDispatch();

    const { fetch } = bindActionCreators(postActionCreator, dispatch);



    function submitForm(event) {
        event.preventDefault();
        const newpost = {
            title: event.target.title.value,
            info: event.target.info.value,
            user: user.token
        }


        axios.post('http://localhost:3000/post/create', newpost)
            .then(response => {
                fetch()
                history.push("/");
            })
            .catch(err => console.log('error'))
    }

    return (
        <div className="App">
            <h1>Create post</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>title : </label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        required
                    />
                    <label>info : </label>
                    <textarea name="info"
                    ></textarea>
                    <button type="submit">Create post</button>
                </div>
            </form>
        </div>
    );
}

export default Create;
