import React from 'react';

const userItem = (props) =>{
    <li className="user__item">
        <h2 className="user__item-name">{props.name}</h2>
        <img src ={props.pic} alt ={props.name}/>
        <span className="user__age">{props.age}</span>
        <span className="user__gender">{props.gender}</span>
        <p className="user__location">{props.city}</p>

    </li>
}

export default UserItem;