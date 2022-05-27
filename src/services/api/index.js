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

api.updateUser = async ({
  age,
  weight,
  start,
  end
} = {}) => {
  const user = await api.getUser()

  const data = {
    ...user,
    age,
    weight,
    start,
    end,
    daily_quantity: weight * 35
  }

  let users = JSON.parse(localStorage.getItem('users')) 
  users = users.map(u => {
    if (u.name === user.name) {
      u = data
    }
    return u
  })
  
  localStorage.setItem('users', JSON.stringify(users))
  localStorage.setItem('logged', JSON.stringify(data))
}

api.getUserActions = async ({
  date
} = {}) => {
  const user = await api.getUser()
  if (!user || !user.start) return []

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
    const userStart = user.start.split(':')
    const start = (date || today).set({
      hour: userStart[0],
      minute: userStart[1]
    })
    const userEnd = user.end.split(':')
    const end = (date || today).set({
      hour: userEnd[0],
      minute: userEnd[1]
    })

    let currTime = start
    let newUserActions = []

    const hasDiff = () => {
      return currTime.diff(end).milliseconds <= 5
    }

    while (hasDiff()) {
      newUserActions.push({
        _id: newUserActions.length,
        time: currTime.toISO(),
        done: false
      })

      currTime = currTime.plus({
        minutes: 30
      })
    }
    newUserActions = newUserActions.map(o => {
      o.quantity = user.daily_quantity / newUserActions.length
      return o
    })

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