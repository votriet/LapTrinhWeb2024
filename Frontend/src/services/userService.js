import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
    return axios.post('/api/login', { email: userEmail, password: userPassword })
}

const getAllUsers = (inputId) => {
    // template string
    return axios.get(`/api/get-all-users?id=${inputId}`)

}

const createNewUserService = (data) =>{
    console.log('check data from service', data)
    
    return axios.post('/api/create-new-user', data)
}
const deleteUserService = (userId) => {
    // return axios.delete('/api/delete-user',{id: userId})
  
    return axios.delete('/api/delete-user', {
      // headers: {
      //   Authorization: authorizationToken
      // },
      data: {
        id: userId
      }
    });
  
  }
  const editUserService = (inputData) => {
    return axios.put('/api/edit-user', inputData
      //data:inputData
      // headers: {
      //   Authorization: authorizationToken
      // },
      // data: {
      //   id: userId
      // }
    );
  }
export { handleLoginApi, getAllUsers, createNewUserService,deleteUserService,editUserService }