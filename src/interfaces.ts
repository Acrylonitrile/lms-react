export interface ILoginDetails {
  email: string
  password: string
}

export interface ISignupDetails extends ILoginDetails {
  first_name: string
  last_name: string
}
