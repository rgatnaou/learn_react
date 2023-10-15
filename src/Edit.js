import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const Creat = () => {
  const [userId, setuserId] = useState("");
  const [title, settitle] = useState("");
  const [body, setbody] = useState("");
  const [wait, setwait] = useState(false);

  const { id } = useParams();

  useEffect((id) => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts/" + id)
        .then((response) => response.json())
        .then((json) => {
          setuserId(json.userId);
          settitle(json.title);
          setbody(json.body);
          console.log("Data Fetched 1", json);
        });
    }, 2000);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setwait(true);
    fetch("https://jsonplaceholder.typicode.com/posts/" + id ,{
      method: 'PUT',
      body: JSON.stringify({
        id: id,
        title: title,
        body: body,
        userId: userId,
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
    });
  };

  return (
    <div className="container border-rad" style={{ marginTop: "5%" }}>
      {!userId && <h1>loading ....</h1>}
      {userId && (<>
        <h1 style={{ marginTop: "5%" }}>Update</h1>
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="form-floating mb-3" style={{ marginTop: "10%" }}>
          <input
            type="text"
            className="form-control"
            id="userId"
            required
            value={userId}
            onChange={(e) => setuserId(e.target.value)}
          />
          <label htmlFor="userId">User Id</label>
        </div>
        <div className="form-floating">
          <input
            type="text"
            className="form-control"
            id="title"
            required
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
          <label htmlFor="title">title</label>
        </div>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="body"
            style={{ height: "100px" }}
            required
            value={body}
            onChange={(e) => setbody(e.target.value)}
          ></textarea>
          <label htmlFor="body">body</label>
        </div>
        { !wait &&<div className="col-12" style={{ marginTop: "5%" }}>
          <button className="btn btn-primary" type="submit" >
            Submit form
          </button>
        </div>}
        {wait && <div className="col-12" style={{ marginTop: "5%" }}>
          <button className="btn btn-primary" type="submit" disabled >
            Submit form
          </button>
        </div>}
      </form>
      </>)}
    </div>
  );
};
export default Creat;
