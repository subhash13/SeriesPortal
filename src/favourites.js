import SeriesList from "./seriesList";
import { useState,useEffect } from "react";

const Favourites = () => {
    let [seriesData, setData] = useState([])
    useEffect(() => {
      fetch("http://localhost:7000/series")
        .then(res => {
          return res.json();
        })
        .then(data => {
          setData(data)
        })
    },[])
    let clickImage = (id) => {
        let newData = seriesData.filter((value) => value.id != id)
        setData(newData)
      }
    return (
        <div className="favourites">
            <SeriesList data={seriesData} pageTitle="Popular series" delete={clickImage} />
            <SeriesList data={seriesData.filter((value) => value.language == "english")} pageTitle="Popular English series" />
            <SeriesList data={seriesData.filter((value) => value.language == "hindi")} pageTitle="Popular Hindi series" />
        </div>
    );
}

export default Favourites;