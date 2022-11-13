export type UserState = {
  isLoading: boolean
  error: Error | null
  users: UserListData[]
  user: UserCreateData | UserEditData | null
}

export type UserListData = {
  _id: string
  avatar: string
  name: string
  email: string
  status: string
  role: string
}

export type UserCreateData = {
  _id: string
  name: string
  email: string
  password: string
  avatar: File
  isVerified: boolean
  status: string
  role: string
}

export type UserEditData = {
  _id: string
  name: string
  email: string
  password: string
  avatar: File
  isVerified: boolean
  status: string
  role: string
}
