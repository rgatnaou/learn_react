
import {Link} from 'react-router-dom';
const PostList = ({posts,changeTitle,deleteAction}) => {
    return (
        <div>
            <h1>Post</h1>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">id</th>
                    <th scope="col">title</th>
                    <th scope="col">body</th>
                    <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
            {posts.map((post)=>{
                    return(
                        <tr key={post.id}>
                            <th scope="row">{post.id}</th>
                            <td onClick={()=>changeTitle(post.id)}>{post.title}</td>
                            <td>{post.body}</td>
                            <td>
                                <button type="button" onClick={()=>{deleteAction(post.id)}} className="btn btn-danger">Danger</button>
                            </td>
                            <td>
                                <Link to={`/posts/${ post.id}`}  className="btn btn-info">More</Link>
                            </td>
                            <td>
                                <Link to={`/edit/${ post.id}`}  className="btn btn-success">Edit</Link>
                            </td>
                        </tr>
                )})}
                </tbody>
            </table>

        </div>
    )
};
export default PostList;