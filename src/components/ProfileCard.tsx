import React, { useState } from 'react';
import Post from './Post.js'


let ProfileCard = (): React.JSX.Element => {

    const [posts, setPosts] = useState([

        { id: 1, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 2, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 3, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 4, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' }

    ])


    const [title, setTitle] = useState('');

    const [text, setText] = useState("");


    let addPost = (event: { preventDefault: () => void; }) => {

        event.preventDefault();

        const newPost = {

            id: Date.now(),

            title: title,

            text: text,

            author: "Viktor"

        }

        setPosts([...posts, newPost]);

        setTitle("");

        setText("");

    }

    let deletePost = (id: number) => setPosts(posts.filter((post) => post.id !== id));

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

        </section >);
}


export default ProfileCard;