import { axiosPublic } from ".";
export const saveUser = async (user) => {
    const currentUser = {
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
        role: 'randomUser',
        status: 'Verified',
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser);
    return data
}

export const maleBioData= async()=>{
const {data} = await axiosPublic.get('/members/Male');
// console.log(data);
return data;
}