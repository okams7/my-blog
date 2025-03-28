import { useState } from "react";
const Home = () => {

    const [name, setName] = useState("Sami");
    const [age, setAge] = useState(25);

    const handleClick = () => {
        setName("Ali");
        setAge(30);
    }

    return (
        <div className="home">
            <h2>الصفحة الرئيسية</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Change info</button>
        </div>
    );
}

export default Home;