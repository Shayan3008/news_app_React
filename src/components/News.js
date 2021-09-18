import React, { useState } from 'react'
import NewsItem from './NewsItem'
import '../App.css';
import Spinner from './spinner';




export default function News(props) {
    const [check, setcheck] = useState(false);
    const [functionBuild, setfunctionBuild] = useState(false)
    const [pageNo, setpageNo] = useState(1);
    const [articles, setstate] = useState([]);
    const handlePrev = async () => {


        setcheck(false);
        let url = await `https://newsapi.org/v2/top-headlines?country=in&categories=${props.category}&apiKey=9234c7cc65ef40978d61fbd86e9bea44&page=${pageNo - 1}`;
        setpageNo(pageNo - 1);
        let data = await fetch(url);
        let parsedData = await data.json();

        setstate(parsedData.articles)

        setcheck(true);

    };

    const handleNext = async () => {
        // console.log('GET');

        setstate(articles.splice(0, articles.length))
        setcheck(false);

        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9234c7cc65ef40978d61fbd86e9bea44&page=${pageNo + 1}`;
        setpageNo(pageNo + 1)

        let data = await fetch(url);
        let parsedData = await data.json();
        setstate(parsedData.articles);

        console.log(pageNo)
        setcheck(true);

    };


    let totalPages;

    let getNewsData = async () => {
        if (check === false) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=9234c7cc65ef40978d61fbd86e9bea44&page=${pageNo}`;
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData)
            totalPages = parsedData.totalResults;
            console.log(totalPages)
            setstate(parsedData.articles);

            setcheck(true);
            setfunctionBuild(true)
        }
    }


    if (functionBuild === false)//always put these conditions
        getNewsData();

    return (
        <div className='container '>
            <h1 className='text-center m-4'>This is news Apps top-headlines</h1>
            {!check && <Spinner />}
            <div className="row my-4">
                {check && articles.map((element) => {

                    if (element.urlToImage !== null)
                        return <div key={element.url} className="col md-4">
                            <NewsItem title={element.title} des={element.description === null ? '' : element.description} img={element.urlToImage} url={element.url} />
                        </div>
                    else return null;


                })}
            </div>

            <div className="d-flex justify-content-between">
                <button disabled={pageNo <= 1} type="button" className="btn btn-primary btn-sm w-25 bg-dark" onClick={handlePrev}>Prev</button>
                <button disabled={pageNo === Math.ceil(totalPages / 20)} type="button" className="btn btn-primary btn-sm w-25 bg-dark" onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}

