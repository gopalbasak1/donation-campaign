import React, { useEffect, useState } from 'react';
import { getFormLocalStorage } from '../Utility/localStorage';

const UseLocalStorage = () => {

    const [localData, setLocalData] = useState([]);
    //console.log(localData);
    useEffect(()=>{
        setLocalData(getFormLocalStorage());
    },[])

    return {localData}
};

export default UseLocalStorage;