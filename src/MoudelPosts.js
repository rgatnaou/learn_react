import { useState, useEffect } from "react"

function MoudelPosts(url) {

    const[posts , setPosts] = useState(null);
    const [status, setStatus] = useState(true);
    const [error, setError] = useState(null);
    
      const deleteAction = (id) =>
      {
          fetch("https://jsonplaceholder.typicode.com/posts/" + id ,{
            method: 'DELETE',
          })
          const newPosts = posts.filter((post)=>post.id !== id);
          setPosts(newPosts);
      }
  
      const changeTitle = (id) => 
      {
          const newPosts = posts.map((post)=>
          {
              if(post.id === id)
              {
                post.title = "changed";
              }
              return post;
          });
          setPosts(newPosts);
      }
    
    useEffect(()=>{
      setTimeout(() => {
        fetch(url)
          .then((res)=>{
            if(!res.ok)
              throw Error("Error in fetching data");
            return res.json();
          })
          .then((data)=>{
              setPosts(data);
              setStatus(false);
          })
          .catch((err)=>{
              setError(err.message);
              setStatus(false);
          });
      }, 3000);
    },[url]);
    return {posts,deleteAction,changeTitle,status,error};
}
export default MoudelPosts;
