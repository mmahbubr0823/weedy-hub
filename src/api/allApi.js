import { axiosPublic } from ".";
export const saveUser = async (user) => {
    const currentUser = {
        name: user?.displayName,
        email: user?.email,
        photo: user?.photoURL,
        role: 'randomUser',
        status: 'Verified',
    }
    const { data } = await axiosPublic.put(`/users/${user?.email}`, currentUser);
    return data
}
