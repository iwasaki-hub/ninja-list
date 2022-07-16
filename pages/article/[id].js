import Link from "next/link"



const Article = ({ article }) => {

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  )
}


export const getServerSideProps = async (context) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
  const data = await res.json();
  return {
    props: {
      article: data,
    }
  }
}




export default Article