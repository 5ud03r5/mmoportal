import NewsList from "@/components/NewsList";

function News(props) {
  return <NewsList data={props.news}></NewsList>;
}

export default News;

export async function getStaticProps() {
  const res = await fetch("https://www.mmobomb.com/api1/latestnews");
  const news = await res.json();

  return {
    props: {
      news: news,
    },
  };
}
