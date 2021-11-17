export interface Post {
    id: number,
    title: string,
    body: string,
    userid: number
}

export type PostsType = {
    posts: Post[]
}
