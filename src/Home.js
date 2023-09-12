import {useState} from 'react';

function Home() {
    //let name = 'Mario';
    const [name, setName] = useState('Mario');
    const[age, setAge] = useState(25);

    function handleClick() {
        setName('Luigi');
        setAge(30);
    }

    function handleClickAgain(name) {
        console.log('Hello ' + name);
    }

    return (  
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={() => handleClickAgain('Robert')}>Click me again!</button>
        </div>
    );
}

export default Home;