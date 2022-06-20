import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.homeAuth_container}>
      <div className={styles.homeAuth_header}>Recommended Blogs</div>
      <div className={styles.homeAuth_blogs}>
        {/* {blogsContent &&
          blogsContent.map((blog, i) => {
            const { title, text, owner_of, externalUrl } = blog;
            return (
              <div>title</div>
            );
          })} */}
      </div>
    </div>
  )
}
