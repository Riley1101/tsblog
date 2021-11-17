import React from 'react';
import styles from './Card.module.css';
import { Post } from '../../types';
type Props = {
    post: Post
}
const Card: React.FC<Props> = ({ post }) => {
    return (
        <article className={styles.card}>
            <img src={`https://picsum.photos/1920/1080?ramdom=${post.id}`} alt="A card image" className={styles.card__img} />
            <h3 className={styles.card__title}>{post.title}</h3>
            <p className={styles.card__description}>{post.body.slice(0, 200)}</p>
        </article>
    )
}

export default Card;