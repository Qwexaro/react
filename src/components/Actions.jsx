import { useState } from "react";

let Actions = () => {
    const [likes, setLikes] = useState(0);

    const [reposts, setReposts] = useState(0);

    return (
        <div>
            <button onClick={() => setLikes(likes + 1)}>
                {likes} &#10084;
            </button>

            <button onClick={() => setReposts(reposts + 1)}>
                {reposts} &#128017;
            </button>
        </div>
    );
}

export default Actions;