import { CreateUser } from "./createUser"
import CredentialValidator from "./validator"
describe('Create User Class', () => {
  const makeCredentialValidator = () => {
    class CredentialValidatorStub implements CredentialValidator{
      validate (_credential: string) {
        return 'Credencial válida'
      }
    }
    return new CredentialValidatorStub()
  }
  const makeSut = () => {
    const validNewUser = {
      name: 'valid_name',
      username: 'valid_username',
      password: 'valid_password',
      confirmPassword: 'valid_password',
      email: 'valid_email',
      credential: 'valid_credential'
    }
    const inValidNewUser = {
      name: 'valid_name',
      username: 'valid_username',
      password: 'valid_password',
      confirmPassword: 'valid_password',
      email: 'valid_email',
      credential: 'valid_credential'
    }
    const credentialValidatorStub = makeCredentialValidator()
    const sut = new CreateUser(credentialValidatorStub)

    return({
      sut,
      credentialValidatorStub,
      validNewUser,
      inValidNewUser
    })
  }
  test('Ensure an valid user is returned when a valid data is received', () => {
    const {sut, validNewUser} = makeSut()
    const newUser  = sut.create(validNewUser)
    const validUser = {
      id:'valid_id',
      name:'valid_name',
      email: 'valid_email',
      username: 'valid_username',
      credential: 'valid_credential'
    }
    expect(newUser).toEqual(validUser)
  })
  test('Ensure username is passed to user creation', () => {
    const {sut} = makeSut()
    const newUser  = sut.create({
      name: 'valid_name',
      username: '',
      password: 'valid_password',
      confirmPassword: 'valid_password',
      email: 'valid_email',
      credential: 'valid_credential'
    })
    expect(newUser).toBe('Missing param username')
  })
  test('Ensure name is passed to user creation', () => {
    const { sut } = makeSut()
    const newUser  = sut.create({
      name: '',
      username: 'valid_username',
      password: 'valid_password',
      confirmPassword: 'valid_password',
      email: 'valid_email',
      credential: 'valid_credential'
    })
    expect(newUser).toBe('Missing param name')
  })
  test('Ensure cpf that is passed to validator', () => {
    const { sut, credentialValidatorStub, validNewUser } =makeSut()
    const validateSpy = jest.spyOn(credentialValidatorStub, 'validate')
    sut.create(validNewUser)
    expect(validateSpy).toHaveBeenCalledWith(validNewUser.credential)
  })
  test('Ensure that validator return invalid credential if passed a invalid credential', () => {
    const { sut, credentialValidatorStub, validNewUser } =makeSut()
    jest.spyOn(credentialValidatorStub, 'validate').mockReturnValueOnce('Cpf negado')
    const newUser = sut.create(validNewUser)
    expect(newUser).toEqual({message: 'Credencial inválida'})
  })
  test('Ensure that validator return valid user if passed a valid credential', () => {
    const { sut, credentialValidatorStub, validNewUser } =makeSut()
    jest.spyOn(credentialValidatorStub, 'validate')
    const newUser = sut.create(validNewUser)
    expect(newUser).toEqual({
      id:'valid_id',
      name:'valid_name',
      email: 'valid_email',
      username: 'valid_username',
      credential: 'valid_credential'
    })
  })
})