import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const CardDefault = ({item}) => {

    const {id, picture, title, category_wise, card_bg, text_button_bg, category_wise_bg} = item || {};

    return (
        <Link to={`/donation-details/${id}`}>
            <Card style={{backgroundColor: card_bg}} className="mt-6 overflow-hidden ">
      <CardHeader color="blue-gray" className="relative rounded-none m-0">
        <img
          src={picture}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>

      <Button style={{backgroundColor: category_wise_bg, color: text_button_bg}} size="sm" className='mb-3 '>{category_wise}</Button>

        <Typography style={{color: text_button_bg}} variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>

      </CardBody>
            </Card>
        </Link>
    );
};

export default CardDefault;