import React, { useState } from "react";
import Card from "../components/Card";
import { FcNext } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";
import Button from 'react-bootstrap/Button';

const Testimonials = ({ data }) => {
  const [index, setIndex] = useState(0);
  const details = data[index];
  function rightHandler() {
    if (index < data.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function leftHandler() {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(data.length - 1);
    }
  }
  const btnHandler = () => {
    const indexx = Math.floor(Math.random() * data.length);
    setIndex(indexx);
  };
  return (
    <div className="card">
      <Card details={details}></Card>
      <div className="icon">
        <div className="lefticon" onClick={leftHandler}>
          <FcPrevious style={{ fontSize: "20px" }}/>
        </div>
        <div className="righticon" onClick={rightHandler}>
          <FcNext style={{ fontSize: "20px" }}/>
        </div>
      </div>
      <div  onClick={btnHandler}>
      <Button className="btn" variant="dark">Surprise Me</Button>
      </div>
    </div>
  );
};

export default Testimonials;
