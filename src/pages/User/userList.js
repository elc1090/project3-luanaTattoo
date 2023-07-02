import React,{useState,useEffect} from 'react';
//import './cards.css';
import Axios from 'axios';
import NavBar from '../../components/NavBar2'


function Card({ title, type }) {
    return (
      <div className={`card ${type}`}>
        <h3>{title}</h3>
      </div>
    );
}
  
function CardRow() {
    const cardData = [
      { title: "Card 1", type: "type1" },
      { title: "Card 2", type: "type1" },
      { title: "Card 3", type: "type1" },
      { title: "Card 4", type: "type1" },
    ];
  
    return (
      <div className="card-row">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} type={card.type} />
        ))}
      </div>
    );
}
  
function CardColumn() {
    const cardData = [
      { title: "Card A", type: "type2" },
      { title: "Card B", type: "type2" },
      { title: "Card C", type: "type2" },
      { title: "Card D", type: "type2" },
    ];
  
    return (
      <div className="card-column">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} type={card.type} />
        ))}
      </div>
    );
}
  
export default function App() {
    return (
      <div>
        <NavBar/>
        <h1>Categoria</h1>
        <div className="container">
          <CardRow />
        </div>
        <h1>Tatuadores</h1>
        <div className="container">
          <CardColumn />
        </div>
      </div>
    );
}

/*
function Card({ title }) {
    return (
      <div className="card">
        <h3>{title}</h3>
      </div>
    );
}
  
function CardRow() {
    const cardData = [
      { title: "Card 1" },
      { title: "Card 2" },
      { title: "Card 3" },
      { title: "Card 4" },
    ];
  
    return (
      <div className="card-row">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} />
        ))}
      </div>
    );
}
  
function UserList() {
    return (
      <div>
        <h1>Four Cards Example</h1>
        <div className="container">
          <CardRow />
        </div>
      </div>
    );
}
export default UserList;
*/

/*
function UserList (){

    const [userList,setUserList] = useState([]);


    useEffect(()=>{
        Axios.get("http://localhost:3001/userlist").then((response)=>{
            setUserList(response.data);
        })
    },[]);


   return (<>
   <NavBar/>
    <div className='wrapper'>
        
        {userList.map((val,key)=>{
            return( <div key={key}>
            <Card
                    title={val.name}
                    description="Idade: ${val.age}  Email: ${val.email}"
                />
            </div>);
        })}
    </div>

    </>);
  
}

export default UserList;
*/

