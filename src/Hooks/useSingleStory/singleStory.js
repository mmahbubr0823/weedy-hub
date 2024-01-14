import { axiosPublic } from "../../api";
export const singleStory= async(id)=>{
    const { data } = await axiosPublic.get(`/successStory/${id}`);
    return data
}