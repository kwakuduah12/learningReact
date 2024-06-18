import React, {useState} from "react";

const dynamicUpdate = () => {

    const [count, setCount] = useState(0);

    const handleIncrement = () => {

        setCount(count + 1);
    }
    return (
        <div>
            <p>
                Count: 
                {count}
                <button>omclick = {handleIncrement} Increment</button>
            </p>
        </div>
    )
    
};

export default dynamicUpdate