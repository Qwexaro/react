import Actions from './Actions.js'
import type { PostCardProps } from './structures/Post.Card.Props.js';


let Post = ({ author, title, text, id }: PostCardProps): React.JSX.Element =>
  <div>
    <article className='post'>
      <h2>{title}</h2>

      <p className='post-text'>{text}</p>

      <p className='post-author'>Author: {author}</p>

      <Actions />
    </article>

  </div>;


export default Post;
