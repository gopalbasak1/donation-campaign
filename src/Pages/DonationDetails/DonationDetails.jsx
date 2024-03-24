import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useDonationData from '../../Hooks/useDonationData';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Avatar,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
import { saveToLocalStorage } from '../../Utility/localStorage';
import CustomSpinner from '../../components/CustomSpinner/CustomSpinner';

const DonationDetails = () => {

    const {id} = useParams();
    const idInt = parseInt(id);

    const [singleData, setSingleData] = useState({});

    const {data, loading} = useDonationData();


    const handleDonate = () =>{
        saveToLocalStorage(singleData);
    }

    useEffect(()=>{
        if(data){
        const singleData = data.find((item) => item.id === idInt);
        setSingleData(singleData)
        }
    },[data, idInt]);
 
    const {picture, title,description,price, text_button_bg} = singleData || {} ;

    if(loading){
      return <CustomSpinner></CustomSpinner>
    }

    return (
          <Card className="mt-12 w-[1470px] rounded-md shadow-none lg:px-20 overflow-hidden mx-auto">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-md relative"
      >
        <img className='w-full rounded-md h-[550px]'
          src={picture}
          alt={title}
        />

        <div className='absolute bottom-0 bg-opacity-40 bg-black w-full h-28 pl-8 '>

        <Button onClick={handleDonate} className='mt-8 rounded-sm capitalize text-lg font-medium' style={{backgroundColor: text_button_bg}} size='md'>

            Donate {price}

        </Button>
        </div>

      </CardHeader>
      <CardBody>
        <Typography className='text-4xl font-bold' variant="h2" color="black">
          {title}
        </Typography>
        <Typography variant="lead" color="gray" className="mt-3 font-normal text-[16px]">
         {description}
        </Typography>
      </CardBody>
      
    </Card>
    );
};

export default DonationDetails;