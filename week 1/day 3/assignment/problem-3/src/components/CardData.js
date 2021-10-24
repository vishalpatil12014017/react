import React from 'react';
import '../components/Card.css'
function CardData(props) {
   
    const style1 = {
        "width": "100%"
    };
    const sty = {
        "height": "85%",
        "width": "100%"
    }
    return (
        <>
            <div className="col col-12  g-3 col-lg-6 col-xl-4" >
                <div className="card my-3 rounded-3 border border-3" style1={style1}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={props.style.image} className="img-fluid rounded-start" alt="..." style={sty} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col">
                                        <h5 className="card-title">{props.style.hotel_name}</h5>
                                    </div>
                                    <div className="col">
                                        <button className="float-end btn" style={{ backgroundColor: "rgb(139, 252, 125)", fontWeight: 800 }}>{props.style.ratings}</button>
                                    </div>
                                </div>
                                <div className="row mt-2">
                                    <div className="col">
                                        <p className="card-text mt-0 text-muted">continental,Pizza,Asian,Dessarts</p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text mt-0 mb-0 text-muted float-end"><small className="text-muted">{props.style.votes} Votes</small></p>
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col">
                                        <p className="card-text mt-0 text-muted">Cost ₹ {props.style.cost} for one</p>
                                    </div>
                                    <div className="col">
                                        <p className="card-text mt-0 text-muted float-end"><small className="text-muted">{props.style.review} Reviews</small></p>
                                    </div>
                                </div>
                                <p className="card-text fs-6 mb-0">Min ₹100 • Upto 30 min </p>
                                <p className="card-text fs-6 mt-0 mb-3">{props.style.cash && props.style.card && props.style.upi ? "Accept all Payment" : props.style.cash && props.style.card && !props.style.upi ? "Accept card and cash" : props.style.cash && !props.style.card && props.style.upi ? "Accept cash and UPI" :!props.style.cash && props.style.card && props.style.upi ? "Accept card and UPI" : props.style.cash && !props.style.card && !props.style.upi ? "Only Cash Accepted" : !props.style.cash && props.style.card && !props.style.upi ? "Only Card Accepted" :!props.style.cash && !props.style.card && props.style.upi? "Only UPI Accepted":"NONE"}</p>
                            </div>
                        </div>
                        <div className="input-group mb-2">
                            <input type="text" className="form-control" placeholder="Enter Payment Details" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                            <span className="input-group-text btn btn-outline-success" id="basic-addon2">Order Payment </span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default CardData;
