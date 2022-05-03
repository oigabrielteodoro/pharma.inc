export type User = {
  gender: 'male' | 'female'
  name: {
    title: string
    first: string
    last: string
  }
  registered: {
    date: string
    age: number
  }
}

export type GetUsersResponse = {
  results: User[]
  info: {
    seed: string
    results: number
    page: number
    version: string
  }
}
