import CategoryList from "@/components/CategoryList";
import CATEGORIES from "../../public/categories";

function Category(props) {
  return <CategoryList data={props.category}></CategoryList>;
}

export default Category;

export async function getStaticProps(context) {
  const { params } = context;
  const { category } = params;
  const res = await fetch(
    "https://www.mmobomb.com/api1/games?platform=pc&category=" + category
  );
  const data = await res.json();

  return {
    props: {
      category: data,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: CATEGORIES.map((category) => {
      return { params: { category: category } };
    }),
    fallback: false
  };
}
