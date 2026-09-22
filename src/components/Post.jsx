import Actions from './Actions'

let Post = ({ author, title, text }) =>
    <div>
        <article className='post'>
            <h2>{ title }</h2>

            <p className='post-text'>{ text }</p>

            <p className='post-author'>Author: { author }</p>

            <Actions />
        </article>
        
    </div>;

export default Post;