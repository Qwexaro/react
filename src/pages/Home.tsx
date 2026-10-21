import type React from "react";
import Post from "../components/Post.js";
import { usePosts } from "../context/Posts.Context.js";

let Home = (): React.JSX.Element => {
  // Получаем и массив постов, и функцию для удаления конкретного поста
  const { posts, deletePost } = usePosts();

  return (
    <section>
      <h1>Main Page</h1>
      <div className="feed">
        <h2>Rils</h2>

        {posts.length > 0 ? (
          posts.map(post => (
            <Post
              key={post.id}
              id={post.id}
              author={post.author}
              title={post.title}
              text={post.text}
              onDelete={deletePost}
            />
          ))
        ) : (
          <p className='empty-message'>Publish your first post!</p>
        )}
      </div>
    </section>
  );
}

export default Home;
