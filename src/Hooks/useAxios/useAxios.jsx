import axios from 'axios';

const fetch = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxios = () => {
    return fetch;
        
};

export default useAxios;