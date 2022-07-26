import axios from 'axios'

class Users {
  static search() {
    return axios.get('/users').then(resp => resp.data)
   } 
}

export default Users
