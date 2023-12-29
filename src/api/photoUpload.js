import axios from "axios";


export const uploadPhoto = async(image)=>{
    const formData = new FormData();
    formData.append('image', image);
    const {data} = await axios.post('https://api.imgbb.com/1/upload?key=f693e6b0c879da2b2b6de4c871fffa05', formData);
    return data
}