import React from "react";
import Banner from "componentes/Banner";
import styles from "./Home.module.css";
import posts from "json/posts.json";
import PostCard from "componentes/PostCard";

function Home() {
  return (
      <ul className={styles.posts}>
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
  );
}

export default Home;
