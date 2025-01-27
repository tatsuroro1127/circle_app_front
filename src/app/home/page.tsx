"use client"
import "./page.css"
import CommonHeader from "../common/commonHeader";
import PictureList from "./PictureList";
import React, { useState, useEffect } from 'react';


export default function Home() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8080/api');
      const json = await response.json();
      setData(json);
    };

    fetchData();
  }, []);

  return (
    <>
      <header>
        <CommonHeader />
      </header>
      <body>
        <div className="selected_group">
          <h1 className="text_selected_group">注目のサークル{data}</h1>
          <div className='slider'>
            <PictureList />
          </div>
        </div>
      </body>
    </>
  );
}
