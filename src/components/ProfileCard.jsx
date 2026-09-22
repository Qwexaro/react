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

        <Post author={"Viktor"} title={"Shadow"} text={"Lorem"} />
        <Post author={"Alex"} title={"Shadow"} text={"Any text"} />
        <Post author={"Sam"} title={"Shadow"} text={"Any text"} />
        <Post author={"Sokrat"} title={"Shadow"} text={"Any text"} />
        <Post author={"Maxim"} title={"Shadow"} text={"Any text"} />
        <Post author={"Dima"} title={"Shadow"} text={"Any text"} />
        <Post author={"Misha"} title={"Shadow"} text={"Any text"} />
        <Post author={"Semen"} title={"Shadow"} text={"Any text"} />
    </section>;

export default ProfileCard;