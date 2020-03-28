import React from 'react';
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, CardSubtitle, Button
 } from 'reactstrap';
 import image1 from './Images/josh.jpg';
 import "./style2.css"

const MyProfile = () => {
    return (
       <div>
           <div className="newuser">
      <Card>
      <CardImg src={image1} alt="user" className="user" />
        <CardBody>
          <CardTitle>Josh Boepple</CardTitle>
          <CardSubtitle>Add me!</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </div>
       </div>
    );
}
 
export default MyProfile;