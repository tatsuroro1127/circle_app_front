"use client"
import "./page.css"
import CommonHeader from "../common/commonHeader";
import PictureList from "./PictureList";
import React, { useState, useEffect } from 'react';


export default function Home() {
  return (
    <>
      <header>
        <CommonHeader />
      </header>
      <body>
        <div className="selected_group">
          <h1 className="text_selected_group">注目のサークル</h1>
          <div className='slider'>
            <PictureList />
          </div>
        </div>
      </body>
    </>
  );
}
