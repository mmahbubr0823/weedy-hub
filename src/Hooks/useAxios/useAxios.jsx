import axios from 'axios';

const fetch = axios.create({
    baseURL: 'assignment-12-server-eta-five.vercel.app'
})

const useAxios = () => {
    return fetch;

};

export default useAxios;