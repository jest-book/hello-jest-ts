import axios from 'axios'

export const getNameList = async () => {
  const users = await getUsers()
  return users.map(user => user.name)
}

export const getUsers = async () => {
  const users = await axios.get('/users').then(resp => resp.data)

  // APIのデータから限られた項目のみ抽出している
  return users.map(user => ({
    name: `${user.lastName} ${user.firstName}`,
    age: user.age,
    isDeleted: user.isDeleted,
  }))
}
