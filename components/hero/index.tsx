import React from 'react';
import styles from './Hero.module.css';
const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <article className={styles.hero__article}>
                <img className={styles.hero__article__image} src="https://picsum.photos/1920/1080" alt="A hero image with a lonely man sitting" />
                <div className={styles.hero__article__post}>
                    <h2 className={styles.hero__article__post__title}>
                        From SSR to SSG with the next generation of Next.
                    </h2>
                    <div className={styles.hero__article__post__wrapper}>
                        <p className={styles.hero__article__post__body}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi corrupti porro, earum temporibus debitis, officia sapiente ducimus tempore blanditiis tenetur voluptatum numquam exercitationem ad in fugiat optio, unde nihil excepturi.</p>
                        <div className={styles.hero__article__post__avator}>
                            <img className={styles.hero__article__post__avator__profile} src="/julia.jpg" alt="Lead dev from vercel team" />
                            <span className={styles.hero__article__post__avator__name}>Varcel Team</span>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default Hero;

