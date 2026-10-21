import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import type { PostsContextType } from "./interfaces/Posts.Context.Type.js";
import type { Post } from "./interfaces/Post.js";

const PostsContext = createContext<PostsContextType | undefined>(undefined);

export function PostsProvider({ children }: { children: ReactNode }) {

    const [posts, setPosts] = useState<Post[]>(() => {

        if (typeof window !== "undefined") {

            const savedPosts = localStorage.getItem("posts");

            if (savedPosts) return JSON.parse(savedPosts);

        }

        return [

            { id: 1, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

            { id: 2, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

            { id: 3, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' },

            { id: 4, author: 'Viktor', title: 'Study react for frontend', text: 'Any text' }

        ];

    });

    useEffect(() => {

        console.log("Посты обновлены в localStorage, количество:", posts.length);

        localStorage.setItem("posts", JSON.stringify(posts));
    },
        [posts]);

    const deletePost = (id: number) => {
        setPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
    };

    return (
        <PostsContext.Provider value={{ posts, setPosts, deletePost }}>
            {children}
        </PostsContext.Provider>
    );

}

export function usePosts(): PostsContextType {

    const context = useContext(PostsContext);

    if (!context) throw new Error("usePosts must be used within a PostsProvider");

    return context;

}
