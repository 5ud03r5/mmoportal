import parse from "html-react-parser";
import classes from "./NewsList.module.css";
import { useState } from "react";
const NewsList = (props) => {
  const [itemDisplay, setItemDisplay] = useState();

  const expandItem = (item) => {
    if (item === itemDisplay) {
      setItemDisplay();
    } else {
      setItemDisplay(item);
    }
  };
  return (
    <div className={`container ${classes.mainDiv}`}>
      {props.data.map((item) => {
        return (
          <div
            className={
              itemDisplay && itemDisplay.id === item.id
                ? classes.divActive
                : classes.div
            }
            key={item.id}
          >
            <div className={classes.title}>{item.title}</div>
            <hr className={classes.hr}></hr>
            <div className="d-flex">
              {itemDisplay && itemDisplay.id === item.id ? (
                <></>
              ) : (
                <img src={item.thumbnail} className={classes.img} />
              )}
              <div className={classes.description}>
                {item.short_description}
                <div className={classes.a} onClick={() => expandItem(item)}>
                  {itemDisplay && itemDisplay.id === item.id ? "" : "Read more"}
                </div>
              </div>
            </div>
            {itemDisplay && itemDisplay.id === item.id && (
              <div className={classes.parsed}>
                {parse(itemDisplay.article_content)}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default NewsList;
