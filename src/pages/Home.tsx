import type React from "react";

import Post from "../components/Post.js";
import { useState } from "react";
import { usePosts } from "../context/Posts.Context.js";

let Home = (): React.JSX.Element => {

  const { posts } = usePosts();

  return (
    <section>
      <h1>Main Page</h1>
      <div className="feed">
        <h2>Rils</h2>

        {
          posts.length > 0 ? (

            posts.map(post => (
              <Post
                key={post.id}

                author={post.author}

                title={post.title}

                text={post.text}

                id={post.id}
              />
            ))
          ) : (
            <p className='empty-message'>Publish your first post!</p>
          )
        }
      </div>
    </section>
  );

}

export default Home;
