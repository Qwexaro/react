import type React from "react";
import { useState, useEffect } from "react";
import { usePosts } from "../context/Posts.Context.js";

let Profile = (): React.JSX.Element => {

  const [title, setTitle] = useState('');

  const [text, setText] = useState("");

  const [error, setError] = useState('');

  const { posts, setPosts } = usePosts();


  let addPost = (event: { preventDefault: () => void; }): void => {

    event.preventDefault();

    if (!title.trim() || !text.trim()) { setError("Заполните заголовок и текст"); return; }

    const newPost = {

      id: Date.now(),

      title: title,

      text: text,

      author: "Viktor"

    }

    setPosts([...posts, newPost]);

    setTitle("");

    setText("");

    setError('');

  }

  let clearPosts = (): void => setPosts([]);

  return (
    < section className='profile-card' >
      <div className='profile'>
        <div className='avatar'>
          avatar
        </div>
        <div className='profile-info'>
          <h2>Name</h2>
          <p>@nick</p>
        </div>
      </div>

      <form className="post-form" onSubmit={addPost}>
        {error && (
          <p className="form-error">
            {error}
          </p>
        )}
        <input
          type="text"

          placeholder='Заголовок'

          value={title}

          onChange={(event) => setTitle(event.target.value)}
        />

        <textarea
          placeholder="text for post"

          value={text}

          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">
          Опубликовать
        </button>
      </form>
      <button onClick={clearPosts}>Удалить все посты</button>
    </section>
  );

}

export default Profile;
