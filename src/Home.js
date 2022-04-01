import { useState, useEffect } from "react";


const Home = () => {
  let imgArr = [{
    image: "https://www.tvguide.com/a/img/catalog/provider/1/1/1-9006171376.jpg"
  }, {
    image: "https://flxt.tmsimg.com/assets/p7895968_b1t_v8_aa.jpg"
  }, {
    image: "https://pbs.twimg.com/media/E6GeCXFUcAMDsrn?format=jpg&name=large"
  }, {
    image: "https://m.media-amazon.com/images/M/MV5BZGEwYmMwZmMtMTQ3MS00YWNhLWEwMmQtZTU5YTIwZmJjZGQ0XkEyXkFqcGdeQXVyMTI5MzA5MjA1._V1_FMjpg_UX1000_.jpg"
  }]
  return (
    <div className="data">
      <div className="popularSeries">
        {imgArr.map((value) => {
          return (
            <img src={value.image} alt="" height="500px" width="350px" />
          )
        })}
      </div>
    </div>
  );
}

export default Home;