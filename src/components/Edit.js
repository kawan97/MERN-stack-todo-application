import { useSelector } from "react-redux"
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { postActionCreator } from "../state/index"


function Edit() {
    const user = useSelector((state) => state.user);
    const [post, setPost] = useState(null);
    const { id } = useParams()
    useEffect(function () {


        axios.get('http://localhost:3000/post/update/' + id)
            .then(response => {
                if (response.data && response.data.user._id === user._id) {
                    setPost(response.data)
                } else {
                    history.push("/");
                }

            })
            .catch(err => console.log('error'))

    }, [])
    let history = useHistory();
    const dispatch = useDispatch();
    const { fetch } = bindActionCreators(postActionCreator, dispatch);
    function submitFormDelete(event) {
        event.preventDefault();

        axios.post('http://localhost:3000/post/delete/' + id)
            .then(response => {
                fetch()
                history.push("/");
                console.log(response.data)
            })
            .catch(err => console.log('error'))
    }


    function submitForm(event) {
        event.preventDefault();
        const newpost = {
            title: event.target.title.value,
            info: event.target.info.value,
            user: user.token
        }


        axios.put('http://localhost:3000/post/update/' + id, newpost)
            .then(response => {
                fetch()
                history.push("/");
                console.log(response.data)
            })
            .catch(err => console.log('error'))
    }

    return (
        <div className="App">
            <h1>Edit post</h1>
            <form onSubmit={submitForm}>
                <div>
                    <label>title : </label>
                    <input
                        type="text"
                        placeholder="Enter title"
                        name="title"
                        value={post?.title || ""}
                        required
                        onChange={(event) => setPost({ ...post, title: event.target.value })}
                    />
                    <label>info : </label>
                    <textarea name="info"
                        value={post?.info || ""}
                        onChange={(event) => setPost({ ...post, info: event.target.value })}

                    >

                    </textarea>
                    <button type="submit">Edit post</button>
                </div>
            </form>

            <form onSubmit={submitFormDelete}>
                <div>

                    <button type="submit">delete post</button>
                </div>
            </form>


        </div>
    );
}

export default Edit;
