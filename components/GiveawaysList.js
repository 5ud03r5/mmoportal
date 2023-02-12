import classes from "./GiveawaysList.module.css";

const GiveawaysList = (props) => {
  return (
    <div className={`container ${classes.div}`}>
      <div className={classes.mainDiv}>
        {props.data.map((item) => {
          return (
            <div key={item.id} className={classes.back}>
              <div className={classes.title}>{item.title}</div>
              <img src={item.thumbnail} className={classes.img} />
              <div className={classes.description}>
                {item.short_description}
              </div>
              <a type='_blank' className={classes.a} href={item.giveaway_url}>Go to website</a>
              <div className={classes.keys} style={{ width: item.keys_left}}>{item.keys_left}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GiveawaysList;
