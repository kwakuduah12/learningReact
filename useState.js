import React, {useState} from "react";

const dynamicData = () => {
    const [data, setData] = useState(["item 1", "item 2", "item 3"]);

    return (
        <ul>
            {
            data.map((item, idex) => (
                <li key = {index} > {item} </li>
            ))
            }
        </ul>
    );
};

export default dynamicData;