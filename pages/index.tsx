import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import Header from '../components/header';
import Hero from '../components/hero';
import Posts from '../components/posts';
import API from '../hooks';
import { Post, PostsType } from '../types';


const Home: NextPage<PostsType> = ({ posts }) => {
  return (
    <div className={styles.container}>
      <Header />
      <Hero />
      <Posts posts={posts} />
    </div>
  )
}

export default Home;

export async function getStaticProps() {
  const res = await fetch(`${API}/posts`)
  const posts: Post[] = await res.json()
  return {
    props: {
      posts,
    },
  }
}