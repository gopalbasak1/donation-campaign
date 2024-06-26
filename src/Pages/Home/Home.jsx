import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import CategoryList from '../../components/CategoryList/CategoryList';
import useDonationData from '../../Hooks/useDonationData';

const Home = () => {

    const [value, setValue] = useState("");
    const {data, loading} = useDonationData();
    const [filteredData, setFilteredData] = useState([]);

    useEffect(()=>{
        setFilteredData(data)
    },[data])
    
    const handleSearch = () =>{
        if(value.trim() != ""){
            const filtered = data.filter(item => item.category_wise.toLowerCase().includes(value.toLowerCase()));
            setFilteredData(filtered)
        }
        else{
            setFilteredData(data)
        }
    }

    return (
        <div>
            <Banner value={value} setValue={setValue} handleSearch={handleSearch}></Banner>
            <CategoryList loading={loading} filteredData={filteredData}></CategoryList>
        </div>
    );
};

export default Home;