import axios from 'Axios'; 

async function fetchUser(user) {  
    try {
        const res = await axios.get('https://api.github.com/users/' + user); 
        return res.data;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

export default fetchUser;
