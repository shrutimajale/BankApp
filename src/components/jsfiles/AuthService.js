import axios from 'axios';

const API_URL = 'http://192.168.0.78:8080';

export const login = async (email,password) => {
   
        const response = await axios.post(`${API_URL}/login`, { email, password });
        const { token ,role} = response.data;
     
        console.log(token);
        localStorage.setItem('token1', token);
       
        console.log(response.data)
      
        return {token,role}; 
  
};
export const getToken = () => {
  return localStorage.getItem('token1');
};