# Criação de usuário #

A ideia desse projeto é criar um exemplo de como aplicar os conceitos de BDD para criação de testes.

## História de usuário

Como novo usuário quero me cadastrar enviando , username, name, email, password e passwordConfirmation.

## Cenários 

### Cenário 1
Sendo que sou um novo usuário
Quando envio username, name, email, password e passwordConfirmation
Então recebo resposta com statusCode 201, com um corpo contendo, id, name, email, username não podendo receber password

### Cenário 2
Sendo que sou um novo usuário
Quando não envio username
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Missing Parameter username'

### Cenário 3
Sendo que sou um novo usuário
Quando não envio name
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Missing Parameter name'

### Cenário 4
Sendo que sou um novo usuário
Quando não envio email
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Missing Parameter email'

### Cenário 5
Sendo que sou um novo usuário
Quando não envio password
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Missing Parameter password'

### Cenário 6
Sendo que sou um novo usuário
Quando não envio password
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Missing Parameter passwordConfirmation'

### Cenário 7
Sendo que sou um novo usuário
Quando envio password e passwordConfirmation diferentes
Então recebo resposta com statusCode 400, com um corpo contendo, message: 'Invalid Parameter passwordConfirmation'

