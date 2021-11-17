import { Post, PostsType } from "../../types";
import { useState } from "react";


const Init = (props: PostsType) => {
    const [post, setPosts] = useState(props.posts)
    return (
        post
    )
}

export default Init;