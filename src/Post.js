import PostList from "./PostList";
import MoudelPosts from "./MoudelPosts";

const Post = () => {
    const {posts,deleteAction,changeTitle,status,error} = MoudelPosts('https://jsonplaceholder.typicode.com/posts');


    return (
      <div >
        {posts && <PostList posts={posts} changeTitle={changeTitle} deleteAction={deleteAction}/>}
        {status && <h1 style={{color: "gray"}}> plz wait... </h1>}
        {error && <h1 style={{color: "red"}}> {error} </h1>}
      </div>
      );
}

export default Post;