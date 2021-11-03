import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            const resp = await fetch(
                "https://worker.metarya.workers.dev/post"
            );
            const postsResp = await resp.json();
            setPosts(postsResp);
        };

        getPosts();
    }, []);
    const divStyle = {
        margin: 'auto',
        marginBottom: '10px',
        width: '50%',
        border: '4px solid #f2f2f2',
        borderRadius: '15px',
        padding: '10px',
        backgroundColor: '#FFFFFF',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };
    const bodStyle = {
        backgroundColor: '#f2f2f2',
        WebkitTransition: 'all', // note the capital 'W' here
        msTransition: 'all' // 'ms' is the only lowercase vendor prefix
    };
    let likePostAPI = async (post) => {

    }
    return (
        <html>
        <body style={bodStyle}>
        <div>
            <h1 style={{textAlign:'center'}}>Metarya's Page</h1>
            {posts.map((post) => (
                <div style={divStyle} key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                    <div style={{width: '30%'}}>
                        <div style={{width: "30%", height: "50px", float: "left"}}>
                            👍 {post.likes}
                        </div>
                        <div style={{marginLeft: "0%",height: "50px", float: "left"}}>
                            😂 {post.laughs}
                        </div>
                        <div style={{marginLeft: "60%",height: "50px"}}>
                            ❤️ {post.loves}
                        </div>
                    </div>
                    <div style={{width: '50%'}}>
                        <div style={{width: "20%", height: "50px", float: "left"}}>
                            <button onClick={{post}.likes+=1}> 👍️ Like </button>
                        </div>
                        <div style={{marginLeft: "0%",height: "50px", float: "left"}}>
                            <button> 😂 Laugh </button>
                        </div>
                        <div style={{marginLeft: "45%",height: "50px"}}>
                            <button> ❤️ Love </button>
                        </div>
                    </div>
                    <p>
                        Posted by: {post.username}
                        Posted on: {new Date(post.published_at).toLocaleString()}
                    </p>
                </div>
            ))}
        </div>
        </body>
        </html>
    );
};

export default Posts;
