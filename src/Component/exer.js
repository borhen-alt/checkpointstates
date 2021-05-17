import React, { useState, useEffect } from 'react';

const Profile = () =>{
const [timer,setTimer] = useState (0);
useEffect(()=>{
    setInterval(()=>{
        setTimer (timer=>timer + 1);
    },1000);
},[]);
return (
    <div className="exer">
        <h1>Profile:{timer}</h1>
    </div>
);
};
export default Profile;