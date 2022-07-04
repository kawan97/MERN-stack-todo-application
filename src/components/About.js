import { useSelector } from "react-redux"


function About() {

  const posts = useSelector((state) => state.post);
  return (
    <div className="App">
      {posts?.map(post => <div key={post._id}>{post.title}</div>)}

    </div>
  );
}

export default About;
