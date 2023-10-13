import MoudelPosts from "./MoudelPosts";
import { useParams } from "react-router-dom";

    const PostInfo = () =>{
        const {id} = useParams();
        console.log(id);
        // eslint-disable-next-line
        const {posts,status,error} = MoudelPosts("https://jsonplaceholder.typicode.com/posts/" +id);
        console.log(posts);
        return (
            <div className="container">
                <h1>Post info - {id}</h1>
                {status && <h1 style={{color: "gray"}}> plz wait... </h1>}
                {error && <h1 style={{color: "red"}}> {error} </h1>}
                {posts && (
                <div className="card" style={{width :"18rem",margin:"20px auto"}}>
                    <div className="card-header">
                    <h1>User Id - {posts.userId}</h1>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Post Id {posts.id}</li>
                        <li className="list-group-item">{posts.title}</li>
                        <li className="list-group-item">{posts.body}</li>
                    </ul>
                </div>)}
            </div>
        );
    }
export default PostInfo;