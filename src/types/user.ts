export type User = {
  gender: string
  name: {
    title: string
    first: string
    last: string
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
