import Actions from './Actions'

let Post = ({ author, title, text }) =>
    <article className='post'>
        <h2>{title}</h2>
        
        <p className='post-text'>{text}</p>
        
        <p className='post-author'>Автор: {author}</p>

        <Actions />
    </article>;

export default Post;