import { Button, Input, Typography } from '@material-tailwind/react';
import React from 'react';

const Banner = ({value,setValue, handleSearch}) => {

    const clearInput = () =>{
        setValue("")
    }

    return (
        <div className='h-[450px] relative flex flex-col justify-center items-center'>

        <div className="absolute inset-0 bg-[url('/Images/bg.png')] bg-cover bg-center bg-no-repeat opacity-10">

        </div>

            <Typography className='text-5xl font-bold mb-12' variant="h2">I Grow By Helping People In Need</Typography>

            <div className="relative flex w-full max-w-[24rem]">
            <Input
                type="email"
                label="Search here."
                value={value}
                onChange={(e)=>setValue(e.target.value)}
                className="pr-20"
                containerProps={{
                className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                color="red"
                onClick={()=>{
                    handleSearch()
                    clearInput()
                }}
                className="!absolute right-1 top-1 rounded"
            >
                Search
            </Button>
            </div>

        </div>
    );
};

export default Banner;