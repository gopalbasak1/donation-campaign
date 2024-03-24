import React, { useState } from 'react';
import UseLocalStorage from '../../Hooks/UseLocalStorage';
import DonationCard from '../../components/DonationCard/DonationCard';
import { Button } from '@material-tailwind/react';


const Donation = () => {

    const {localData} = UseLocalStorage();
    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () =>{
        setShowAll(!showAll)
    }

    if(localData.length == 0){
        return <p> no data found</p>
    }
    
    return (
       <>
         <div className='grid grid-cols-2 gap-8 mt-12 max-w-7xl mx-auto'>
            {
                localData.slice(0, showAll ? localData.length : 4).map(data=> <DonationCard key={data.id} data={data}></DonationCard>)
            }
        </div>
        {
            localData.length> 4 ? (
                <div className='text-center my-10'>
                <Button onClick={handleShowAll} color='green'>
                  {!showAll? "Show All" : "Show Less"}
                 </Button>
                </div>
            ) : null}
       </>
    );
};

export default Donation;