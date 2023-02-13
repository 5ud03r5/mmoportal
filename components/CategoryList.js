import classes from "./CategoryList.module.css";

const CategoryList = (props) => {
  return (
    <div className={`container ${classes.mainDiv}`}>
      {props.data.map((item) => {
        return (
          <div className={classes.div} key={item.id}>
            <div className={classes.title}>{item.title}</div>
            <div className="d-flex">
              <img src={item.thumbnail} className={classes.img}/>
              <div className={classes.right}>
                {item.short_description}
                <div>
                  <a className={classes.a} target="_blank" href={item.game_url}>
                    Visit game website
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CategoryList;
