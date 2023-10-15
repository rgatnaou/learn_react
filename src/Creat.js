import { useState } from "react";
import { useNavigate } from "react-router-dom";

const  Creat = () => {
  const [userId,setuserId]= useState("");
  const [title,settitle]= useState("");
  const [body,setbody]= useState("");
  const [wait,setwait]= useState(false);

  const navigate = useNavigate();

  const handleUserIdChange = (e) => {
    setuserId(e.target.value);
  };
  const handleTitle = (e) => {
    settitle(e.target.value);
  };
  const handleBody = (e) => {
    setbody(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setwait(true);
    setTimeout(() => {  
      fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          userId: userId,
          title: title,
          body: body
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      .then((response) => response.json())
      .then((json) =>{
        console.log(json);
        console.log("Data Saved");
        setwait(false);
        navigate("/posts");
      });
    }, 2000);

  };
  return (
    <div className="container" style={{ marginTop: "5%" }}>
      <h1 style={{marginTop: "5%"}}>Creat</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="form-floating mb-3" style={{marginTop: "10%"}}>
          <input type="text" className="form-control" id="userId" required value={userId} onChange={(e)=>handleUserIdChange(e)} />
          <label for="userId">User Id</label>
        </div>
        <div className="form-floating">
          <input type="text" className="form-control" id="title" required value={title} onChange={(e)=>handleTitle(e)}/>
          <label for="title">title</label>
        </div>
        <div className="form-floating">
          <textarea className="form-control" placeholder="Leave a comment here" id="body" style={{height: "100px"}}
          required value={body} onChange={(e)=>handleBody(e)}></textarea>
          <label for="body">body</label>
        </div>
        <div className="col-12" style={{marginTop: "5%"}}>
          {!wait && <button className="btn btn-primary" type="submit">Submit form</button>}
          {wait && <button className="btn btn-primary" type="submit" disabled>Submit form</button>}
        </div>
      </form>
    </div>
  );
}
export default Creat;