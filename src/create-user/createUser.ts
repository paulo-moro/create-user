import CredentialValidator from "./validator"

export interface IUserData {
  name: string
  username: string
  email: string
  password: string
  confirmPassword: string
  credential: string
}

export interface IUser {
  id: string
  name: string
  username: string
  email: string
  credential: string
}

export class CreateUser {
  private readonly credentialValidator : CredentialValidator
  constructor(credentialValidator: CredentialValidator){
    this.credentialValidator = credentialValidator
  }
  create(userData: IUserData): any {
    const { name, username, email, credential } = userData
    if(!username) {
      return 'Missing param username'
    }
    if(!name) {
      return 'Missing param name'
    }

    const credentialValidate = this.credentialValidator.validate(credential)

    if(credentialValidate === 'Cpf negado'){
      return ({message:'Credencial inválida'})
    }

    const newUser = {
      id:'valid_id',
      name,
      username,
      email,
      credential
    }

    return newUser
  }
}