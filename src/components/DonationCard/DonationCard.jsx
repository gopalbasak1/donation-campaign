import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";


const DonationCard = ({data}) => {


    const {id, picture, title, category_wise, card_bg, text_button_bg, category_wise_bg, price} = data || {};

    return (
        <Card style={{backgroundColor: card_bg}} className="w-full max-w-[48rem] flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="m-0 w-2/5 shrink-0 rounded-r-none"
        >
          <img
            src={picture}
            alt={title}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody>
        <Button style={{backgroundColor: category_wise_bg, color: text_button_bg}} size="sm" className='mb-3 '>{category_wise}</Button>
          <Typography variant="h4" color="blue-gray" className="mb-2">
           {title}
          </Typography>
          <Typography style={{color: text_button_bg}} color="gray" className="mb-8 font-normal">
           ${price}
          </Typography>
          <Button style={{backgroundColor: text_button_bg}} size="md">View Details</Button>
        </CardBody>
      </Card>
    );
};

export default DonationCard;