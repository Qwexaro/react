import Actions from './Actions.js'
import type { PostCardProps } from './structures/PostCardProps.js';


let Post = ({ author, title, text, onDelete, id }: PostCardProps): React.JSX.Element =>
    <div>
        <article className='post'>
            <h2>{title}</h2>

            <p className='post-text'>{text}</p>

            <p className='post-author'>Author: {author}</p>

            <Actions />

            <button className='delete-button' onClick={() => onDelete(id)}> Delete </button>
        </article>

    </div>;


export default Post;