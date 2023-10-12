

const Home = () => {

    const click = (e) => {
        // console.log(e.target);
    }
    const clickParam = (name) => {
        // console.log("hello, click " + name);
    }
    return (
    <div className="container">
        <h1>Homepage</h1>
        <button type="button" onClick={click} className="btn btn-primary">Primary</button>
        <br/>
        <button type="button" onClick={() => clickParam("redouane")} className="btn btn-danger">Danger</button>
    </div>
    )

}
export default Home;