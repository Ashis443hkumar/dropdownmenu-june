import React from "react";
import { Outlet } from 'react-router-dom';

function Home() {
  console.log(h1)
  return (
    <div>
      <h1 className="home">Home</h1>
      <Outlet/>
      
    </div>
  );
}

export default Home;