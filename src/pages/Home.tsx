import type React from "react";

import Post from "../components/Post.js";
import { useState } from "react";

let Home = (): React.JSX.Element => {

  const [posts, setPosts] = useState([

    { id: 1, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

    { id: 2, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

    { id: 3, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

    { id: 4, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' }

  ])

  let deletePost = (id: number): void => setPosts(posts.filter((post): boolean => post.id !== id));


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

                onDelete={deletePost}

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
