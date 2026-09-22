import { useState } from 'react';
import Post from './Post'


let addPost = event => {

    event.preventDefault();

    const newPost = {

        id: Date.now(),

        title: title,

        text: text,

        author: "Viktor"

    }

    setPosts(...postsData, newPost);

    setTitle("");

    setText("");

}


let ProfileCard = () => {

    const [posts, setPosts] = useState([

        { id: 1, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 2, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 3, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

        { id: 4, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' }

    ])


    const [title, setTitle] = useState('');

    const [text, setText] = useState("");


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


            <form className="post-form" onSubmit={ addPost }>
                <input
                    type="text"

                    placeholder='Заголовок'

                    value={title}

                    onChange={(event) => setTitle(event.target.value)}
                />
            </form>


            {
                posts.map(post => (
                    <Post
                        key={post.id}

                        author={post.author}

                        title={post.title}

                        text={post.text}
                    />
                ))
            }

        </section >);
}


export default ProfileCard;