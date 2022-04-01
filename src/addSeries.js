import { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './add.css'

const AddSeries = () => {
    let history = useHistory();
    let [title,setTitle] = useState('')
    let[genre,setGenre] = useState('')
    let[cast,setCast] = useState('')
    let[quote,setQuote] = useState('')
    let[language,setLanguage] = useState('')
    let handleSubmit = (e) =>{
        e.preventDefault();
        let data = {title,genre,cast,quote,language};
        fetch('http://localhost:7000/series',{
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(data)
        })
        .then(()=>{
            alert('data added successfully')
            history.push('/favourites')
        })
    }
    return (
        <div className="addSeries">
            <img src="https://thumbs.dreamstime.com/b/grunge-black-favorite-word-hexagon-rubber-seal-stamp-white-background-203594871.jpg" height="200px" width="500px" alt="" />
            <div className="addSeriesSection">
                <h1 style={{color:"midnightblue"}}>Add your favourite movies & series</h1>
                <div className="add-form">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="">Title:</label>
                        <input
                            type="text"
                            required
                            value={title}
                            onChange = {(e)=>{setTitle(e.target.value)}}
                        />
                        <label htmlFor="">Genre:</label>
                        <input
                            type="text"
                            required
                            value={genre}
                            onChange = {(e)=>{setGenre(e.target.value)}}
                        />
                        <label htmlFor="">Cast:</label>
                        <input
                            type="text"
                            required
                            value={cast}
                            onChange ={(e)=>{setCast(e.target.value)}}
                        />
                        <label htmlFor="">Quote:</label>
                        <input
                            type="text"
                            required
                            value={quote}
                            onChange = {(e)=>{setQuote(e.target.value)}}
                        />
                        <label htmlFor="">Language:</label>
                        <input
                            type="text"
                            required
                            value={language}
                            onChange = {(e)=>{setLanguage(e.target.value)}}
                        />
                        <button style={{backgroundColor:"midnightblue"}}>Add</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default AddSeries;