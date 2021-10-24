import React from 'react';
import { useState } from 'react';
import Navbar from "../components/Navbar"
import data from "../components/MOCK_DATA (3).json";
import { nanoid } from 'nanoid'
import CardData from './CardData';
import '../components/Card.css'
function Card() {
    var newdata = data.map((e) => {
        e["id"] = nanoid(6)
        return e
    })
    const [restarunt, setRestarunt] = useState(newdata);
    const [sortingData, setSortingData] = useState([...newdata])
    const [rating, setRating] = useState([])
    const [isClicked, setIsClicked] = useState(false)
    const handleRating = (e) => {
        const updatedList = restarunt.filter((el) => {
            return el.ratings >= e.target.value
        });
        setRating(updatedList)
        setIsClicked(true)
    };
    const handleSort = (e) => {
        if (e.target.value === 1) {
            setSortingData([...newdata])
            setRating(sortingData.sort((a, b) => {
                return +a.ratings - +b.ratings
            }))
        } else {
            setSortingData([...newdata])
            setRating(sortingData.sort((a, b) => {
                return +b.ratings - +a.ratings
            }))
        }
        setIsClicked(true)
    }
    const handlePayment = (e) => {
        const updatedList = restarunt.filter((el) => {
            if (e.target.value === 1 && el.cash === true) {
                return e
            }
            else if (e.target.value === 2 && el.card === true) {
                return e
            }
            else if (e.target.value === 3 && el.card === true) {
                return e
            } else if (e.target.value === 4 && el.card === true && el.cash === true && el.upi === true) {
                return el
            }
        });
        setRating(updatedList)
        setIsClicked(true)
    };
    return (
        <>
            <Navbar handleRating={handleRating} setIsClicked={setIsClicked} handleSort={handleSort} handlePayment={handlePayment} />
            <div className="fluid-container">
                <div className="row px-4 " >
                    {isClicked ? rating.map((e) => (
                        <CardData key={nanoid(6)} style={e} ></CardData>
                    )) :
                        restarunt.map((e) => (
                            <CardData key={nanoid(6)} style={e} ></CardData>
                        ))
                    }
                </div>

            </div>
        </>
    );
}
export default Card;
