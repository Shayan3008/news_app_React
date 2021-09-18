import React from 'react'

export default function NewsItem(props) {
    return (
        <div>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img===null?"src/dice.jpg":props.img} style={{height:"100px"}} className="card-img-top" alt="src/dice.jpg" />
                <div className="card-body">
                    <h5 className="card-title">{props.title.length > 50 ? props.title.substring(0,49) + "..." : props.title}</h5>
                    <p className="card-text">{props.des.length > 50 ? props.des.substring(0,49) + "..." : props.des}</p>
                    <a href={props.url} className="btn btn-primary bg-dark">Check news</a>
                </div>
            </div>
        </div>
    )
}
