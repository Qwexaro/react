import Actions from './Actions'

let Post = ({ author, title, text }) =>
    <div>
        <article className='post'>
            <h2>Цитаты великих людей</h2>

            <p className='post-text'>Какая цитата?</p>

            <p className='post-author'>Автор: Maxim</p>

            <Actions />
        </article>
        <article className='post'>
            <h2>Цитаты великих людей</h2>

            <p className='post-text'>О Отделе неизбежного</p>

            <p className='post-author'>Автор: Kirill</p>

            <Actions />
        </article>
        <article className='post'>
            <h2>Цитаты великих людей</h2>

            <p className='post-text'>О квантовом бессмертии</p>

            <p className='post-author'>Автор: Sokrat</p>

            <Actions />
        </article>
    </div>;

export default Post;