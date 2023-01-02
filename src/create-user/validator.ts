export default interface CredentialValidator {
  validate:(credential:string)=>string
}