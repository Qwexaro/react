import type { Post } from "./Post.js";

export interface PostsContextType {

    posts: Post[];

    setPosts: React.Dispatch<React.SetStateAction<Post[]>>;

    deletePost: (id: number) => void;

}