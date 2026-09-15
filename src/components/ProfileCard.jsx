import Post from './Post'

let ProfileCard = () =>
    <section className='profile-card'>
        <div className='profile'>
            <div className='avatar'>
                avatar
            </div>
            <div className='profile-info'>
                <h2>Name</h2>
                <p>@nick</p>
            </div>
        </div>
        <Post />
    </section>;

export default ProfileCard;