
import { ArticleList, Meta } from '../components'

export default function Home({ articles }) {
  return (
    <div>
      <Meta title="Home" />
      <ArticleList articles={articles} />
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const articles = await res.json()

  return {
    props: {
      articles
    }
  }

}


// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()

//   return {
//     props: {
//       articles
//     }
//   }

// }
