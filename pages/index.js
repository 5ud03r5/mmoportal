import Main from "@/components/Main";
import { categoriesList, platformList, digitalList } from "@/public/categories";

function MainPage(props) {
  
  return (
    <Main
      categories={props.categories}
      platform={props.platform}
      digital={props.digital}
    />
  );
}

export default MainPage;

export function getStaticProps() {
  const categories = categoriesList();
  const platform = platformList();
  const digital = digitalList();

  return {
    props: {
      categories: categories,
      platform: platform,
      digital: digital,
    },
  };
}
