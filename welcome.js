import React from "react";

// const welcomeMessage = () => {
//     return (
//         <h1> Welcoome to React! </h1>
//     )
// }
// const greeting = React.createElement('h1', null, 'Hello, JSX');
// const greeting  = <h1> Hello, JSX!</>;
// const name = 'React Enthusiat';
// const dynamicGreeting = <h2> Hello, {name} !</h2>;

// export default welcomeMessage;



const Button = ({label}) => {
    return (
        <button> {label} </button>
    );
};

export default Button;