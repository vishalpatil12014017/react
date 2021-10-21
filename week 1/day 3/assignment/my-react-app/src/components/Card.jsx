import React from 'react';
function Card(props) {
    const style = {
        backgroundColor: props.color
    }
    return (
        <>
            <div className="Card my-4" style={style}>
                <div className="grid">
                    <div className="my-4"><h1>{props.date}</h1></div>
                    <div> <img src={props.url} className="float-end" alt="" /></div>
                </div>
                <button className='my-3 p-2'>Case Study</button>
                <h1 className='my-3'>{props.heading}</h1>
                <h2 className='my-3'>{props.subheading}</h2>
                <div className="grid">
                    <div><h3>{props.device}</h3></div>
                    <div> <h1 className="float-end">→</h1></div>
                </div>
            </div>
        </>

    );
}
export default Card;
