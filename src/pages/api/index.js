import { DateTime } from 'luxon'

const api = {}

api.login = async ({
  name
} = {}) => {
  const users = JSON.parse(localStorage.getItem('users'))
  const findUser = users?.find(o => o.name === name)
  if (findUser) {
    localStorage.setItem('logged', JSON.stringify(findUser))
  } else {
    const newUser = {
      _id: users?.length || 0,
      name
    }
    localStorage.setItem('users', JSON.stringify([
      ...(users || []),
      newUser
    ]))
    localStorage.setItem('logged', JSON.stringify(newUser))
  }

  return true
}

api.logout = async ({} = {}) => {
  localStorage.removeItem('logged')
  return true
}

api.getUser = async ({} = {}) => {
  return JSON.parse(localStorage.getItem('logged'))
}

api.getUserActions = async ({
  date
} = {}) => {
  const user = await api.getUser()
  const today = DateTime.local()
  const key = `${user.name}-${date?.toISODate() || today.toISODate()}`

  const sort = arr => {
    const auxArr = arr.sort((a, b) => {
      const dateA = DateTime.fromISO(a.time)
      const dateB = DateTime.fromISO(b.time)

      const diff = dateA.diff(dateB).milliseconds
      return diff > 0 ? 1 : diff < 0 ? -1 : 0
    })
    return auxArr.sort((a, b) => a.done === b.done ? 0 : a.done ? 1 : -1)
  }

  const find = JSON.parse(localStorage.getItem(key))
  if (find) {
    return sort(find)
  } else {
    const start = today.set({
      hour: 8,
      minute: 0
    })
    // const newUserActions = [...Array(32)].map((arr, index) => ({
    const newUserActions = [...Array(4)].map((arr, index) => ({
      _id: index,
      time: start.plus({
        minutes: index * 30
      }).toISO(),
      done: false
    }))
    localStorage.setItem(key, JSON.stringify(newUserActions))
    return sort(newUserActions)
  }
}

api.updateActionStatus = async ({
  _id,
  date
} = {}) => {
  const user = await api.getUser()
  const actions = await api.getUserActions({ date })
  const today = DateTime.local()
  const key = `${user.name}-${date?.toISODate() || today.toISODate()}`

  localStorage.setItem(key, JSON.stringify(actions.map(o => {
    if (o._id === _id) {
      o.done = !o.done
    }
    return o
  })))

  return true
}

export default api