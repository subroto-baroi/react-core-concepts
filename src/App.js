import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {    
  const person =['Joshim','Mannan', 'Rubel','Ferdus'];
  const movies =['Khuda', 'Love', 'Amma']; 
  
  const products =[
    {name:'Laptop', price:'$300.99'},
    {name:'Destop', price:'$290.10'},
    {name:'Camera', price:'$290.10'},
    {name:'Phone', price:'$290.10'},
    {name:'Tab', price:'$290.10'}
  ]
  const productNames =products.map(product => product.name)
  console.log(productNames);
 

    return (
    <div className="App">
      <header className="App-header">
        <Users></Users>
      <Counter></Counter>
        <ul>
          {
            person.map(nayok => <li>{nayok}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        
        {
          products.map(pd => <Product product ={pd}></Product>)
        }
        
        
      
        <Media name={person[0]} movie={movies[0]}></Media>
        <Media name={person[1]} movie={movies[1]}></Media>
        <Media name={person[2]} movie={movies[2]}></Media>
        
      </header>
    </div>
  );
}
function Users(){
  const [users, setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
  return(
    <div>
      <h3>Dainamic Users:{users.length}</h3>
      <ul>
        {
          users.map(user =><li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
  const [count, setCount] = useState(15);
  const handleIncrease =() => setCount (count+1);
  
  const styleCount ={
    border:'1px solid blue',
    backgroundColor :'green',
    borderRadius : '10px',
    margin : '10px'
  }
  return(
    <div style={styleCount}>
      <h1>count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={() => setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product (props){
  const productStyle={
    border:'2px solid red',
    backgroundColor:'lightgray',
    borderRadius:'5px',
    margin:'10px',
    width :'300px',
    height : '230px',
    float :'left'
  }
  const {name, price}= props.product;
  return(
    <div style={productStyle}>
      <h1>{name} </h1>
      <h3>{price}</h3>
      <button>Buy Now</button>
    </div>
  )
}

function Media(props){
  const style ={
    border:'1px solid blue',
    backgroundColor :'green',
    borderRadius : '10px',
    margin : '10px'
  }

  return (
    <div style={style}>
      <h2>Hero Name : {props.name} </h2>
      <h3>Popular Movie : {props.movie} </h3>
    </div>
  )
}


export default App;
