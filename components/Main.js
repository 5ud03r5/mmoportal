import classes from "./Main.module.css";
import "bootstrap/dist/css/bootstrap.css";
import CATEGORIES from "../public/categories";
import Link from "next/link";
import { useEffect, useState } from "react";

const Main = () => {
  const [filter, setFilter] = useState("");
  const [filteredData, setFilteredData] = useState();
  useEffect(() => {
    setFilteredData(
      CATEGORIES.filter((category) => {
        return category.includes(filter);
      })
    );
  }, [filter]);
  return (
    <>
      <div className={classes.inputDiv}>
        <input
          placeholder="Search by type"
          className={classes.input}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        ></input>
      </div>

      <div className={classes.div}>
        <div className={classes.categories}>
          {!filter
            ? CATEGORIES.map((category) => {
                return (
                  <Link href={`/${category}`} className={classes.category}>
                    {category}
                  </Link>
                );
              })
            : filteredData.map((category) => {
                return (
                  <Link href={`/${category}`} className={classes.category}>
                    {category}
                  </Link>
                );
              })}
        </div>
      </div>
    </>
  );
};
export default Main;
