import bin from './images/bin.svg'

const SeriesList = (props) => {
    let seriesData = props.data;
    let title = props.pageTitle;
    let clickImage = props.delete;
    return (
        <div className="seriesList">
            <h1 style={{color:"midnightblue",textAlign:"center"}}>{title}</h1>
            {seriesData.map((value) => {
                return (
                    <div className="display">
                        <h1>Title: {value.title}</h1>
                        <p>Genre: {value.genre}</p>
                        <img src={bin} alt="" width="20px" onClick={() => clickImage(value.id)}/>
                    </div>
                )
            })}
        </div>
    );
}

export default SeriesList;