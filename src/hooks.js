import {useState} from 'react';
import axios from 'axios';
import {v4 as uuidv4} from 'uuid';

const useFlip = () => {
    const [isFlipped, setIsFlipped] = useState(true);
    const flip = () => setIsFlipped(flipped => !flipped);
    return [isFlipped, flip];
}

const useAxios = (url) => {
    if(!url) throw new Error('Please Enter a URL');
    
    const [axiosData, setAxiosData] = useState([]);

    const setData = async() => {
        try {
            const {data} = await axios.get(url);
            setAxiosData( axiosData => [...axiosData, { ...data, id: uuidv4() }] );
        } catch (err) {
            console.error(err);
            return new Error(err.message);
        }
    }
    return [axiosData, setData];
}
export {useFlip, useAxios};