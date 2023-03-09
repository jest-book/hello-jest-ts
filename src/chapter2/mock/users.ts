import axios from 'axios'

export default class Users {
  static search() {
    return axios.get('/users').then(resp => resp.data)
  }
}
