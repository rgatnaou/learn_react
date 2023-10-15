import { useState, useEffect } from 'react';
const Search = () => 
{
    const [posts, setPosts] = useState('');
    const [search, setSearch] = useState('');

    useEffect((posts) => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => {
            setPosts(json);
        }).then(() => {
            
        })
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form submitted');
    }

    return(
        <div className="mx-auto my-auto" style={{width: "30%"}}>
            {posts && (<>
           <form className="mt-4" onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="search2" className="visually-hidden">Search</label>
                    <input type="text" className="form-control" id="search2" placeholder="test" onChange={(e) => {setSearch(e.target.value)}} />
                </div>
                <div className="mt-3 mb-3">
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </div>
            </form>
            {
                posts.filter((post) => (post.title.toLowerCase().includes(search.toLowerCase())))
                .map((post) => {
                    return(
                        <div className="card mt-5" key={post.id}>
                            <div className="card-body">
                                <h5 className="card-title">{post.title}</h5>
                                <p className="card-text">{post.body}</p>
                            </div>
                        </div>
                    )
                })

            }
            </>)}
        </div>
    )
}

export default Search;