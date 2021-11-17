import React from 'react';
import styles from './Posts.module.css';
import Card from '../card';
import { PostsType } from '../../types';
const Posts: React.FC<PostsType> = ({ posts }) => {
    return (
        <section className={styles.posts}>
            <h2 className={styles.posts__title}>More stories</h2>
            <div className={styles.posts__container}>
                {
                    posts && posts.map(item => <Card post={item} key={item.id} />)
                }
            </div>
        </section>
    )
}

export default Posts;