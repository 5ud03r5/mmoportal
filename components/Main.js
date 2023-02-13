import classes from "./Main.module.css";
import "bootstrap/dist/css/bootstrap.css";

import Link from "next/link";
import { useEffect, useState } from "react";

const Main = (props) => {
  const [filter, setFilter] = useState("");
  const [chosenPlatform, setChosenPlatform] = useState("PC");
  const [filteredData, setFilteredData] = useState();
  useEffect(() => {
    setFilteredData(
      props.categories.filter((category) => {
        return category.includes(filter);
      })
    );
  }, [filter]);

  const platformClick = (platform) => {
    setChosenPlatform(platform);
  };
  return (
    <>
      <div className={classes.inputDiv}>
        <input
          placeholder="Search by type"
          className={classes.input}
          onChange={(e) => setFilter(e.target.value.toLowerCase())}
        ></input>
      </div>
      <div className={classes.platforms}>
        {props.platform.map((platform) => {
          return (
            <div
              onClick={() => platformClick(platform)}
              name={platform}
              className={
                chosenPlatform === platform
                  ? classes.platformActive
                  : classes.platform
              }
            >
              {platform}
            </div>
          );
        })}
      </div>

      <div className={classes.div}>
        <div className={classes.categories}>
          {!filter
            ? props.categories.map((category) => {
                return (
                  <Link
                    href={`/${category}?platform=${chosenPlatform.toLowerCase()}`}
                    className={classes.category}
                  >
                    {category}
                  </Link>
                );
              })
            : filteredData.map((category) => {
                return (
                  <Link href={`/${category}?platform=${chosenPlatform.toLowerCase()}`} className={classes.category}>
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
