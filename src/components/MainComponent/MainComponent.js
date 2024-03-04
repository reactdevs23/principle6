import React from "react";
import classes from "./MainComponent.module.css";
const MainComponent = ({ bottomPattern, topPattern, initialPage, data }) => {
  return (
    <>
      <div className={classes.mainWrapper}>
        {topPattern && (
          <img src={topPattern} alt="#" className={classes.topPattern} />
        )}
        <div className={classes.initialPageWrapper}>
          <div className={classes.wrapper}>
            <div className={classes.container}>
              <h2 className={classes.totalItems}>{data.length}</h2>
              <h2
                className={classes.heading}
                dangerouslySetInnerHTML={{ __html: initialPage.heading }}
              ></h2>
            </div>{" "}
            <p className={classes.by}>{initialPage.by}</p>
          </div>
        </div>

        {bottomPattern && (
          <img src={bottomPattern} alt="#" className={classes.bottomPattern} />
        )}
      </div>

      {data.map((el, i) => (
        <div
          className={[classes.mainWrapper, classes.otherPages].join(" ")}
          key={i}
        >
          {topPattern && (
            <img src={topPattern} alt="#" className={classes.topPattern} />
          )}
          <div className={[classes.wrapper].join(" ")}>
            <div className={classes.header}>
              <h2 className={classes.id}>{i + 1}</h2>
              <h2 className={classes.title}>{el.title}</h2>
            </div>
            <div className={classes.infoContainer}>
              <p className={classes.info}>{el.info}</p>
            </div>
          </div>{" "}
          {bottomPattern && (
            <img
              src={bottomPattern}
              alt="#"
              className={classes.bottomPattern}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default MainComponent;
