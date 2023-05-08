import React from 'react'
import { useParams } from 'react-router-dom';

export const Data = (props) => {
    const { data } = useParams();
    const { color } = useParams();
    const { bg } = useParams();

    //a Method to check if route "data" is int or string
    // const dataCheck = (data) => {
    //     const intArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    //     if (intArr.includes(parseInt(data))) {
    //         return "The number is: "
    //     } else {
    //         return "The word is: "
    //     }

    //isNaN is a built in method to check if an input is a number or not after we convert it "is not a number"

    return (
        <div>
            {isNaN(data) ? <h1 className="text-center p-2 mt-5 border-3" style={{ color: color, backgroundColor: bg }} >The word is: {data}</h1> 
            : <h1 className="text-center p-2 mt-5 border-3" style={{ color: color, backgroundColor: bg }} >The number is: {data}</h1>}
        </div>
    );
}

export default Data