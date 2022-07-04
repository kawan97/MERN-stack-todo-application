import { useSelector } from "react-redux"
import { Link } from "react-router-dom";



function Home() {

  const posts = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <h1>Home </h1>

{user.userName}
      <h2>Posts</h2>
      {posts?.map(post => <div key={post._id}>{post.title} {post.user._id === user._id && <Link to={'edit/'+post._id}>Edit</Link>} </div>)} 

    </div>
  );
}

export default Home;
