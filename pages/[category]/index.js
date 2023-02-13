import CategoryList from "@/components/CategoryList";
import { categoriesList, platformList, digitalList } from "@/public/categories";

function Category(props) {
  return <CategoryList data={props.category}></CategoryList>;
}

export default Category;

export async function getServerSideProps(context) {
  

  const { query } = context;

  const { platform, category } = query;

  const res = await fetch(
    "https://www.mmobomb.com/api1/games?platform=" +
      platform +
      "&category=" +
      category
  );
  const data = await res.json();
  
  return {
    props: {
      category: data,
    },
  };
}
