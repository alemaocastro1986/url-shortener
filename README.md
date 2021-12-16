# Shortener URL

É uma aplicação Backend, construida com [NodeJS](https://nodejs.org/en/), [Typescript](https://www.typescriptlang.org/) e [Express](https://expressjs.com/pt-br/) durante o Bootcamp Eduzz fullstack-developer2 na [Digital innovation one](https://web.dio.me/home).

Aplicação consiste em uma [API](https://pt.wikipedia.org/wiki/Interface_de_programa%C3%A7%C3%A3o_de_aplica%C3%A7%C3%B5es) para criar links curtos.

## Conceitos aplicados

- SOLID
- Factory pattern
- Adapter pattern

## Regras da aplicação

- Não pode haver urls duplicadas.
- Não poderá ser criados links com a data de expiração menor que a data atual
- O usuário deverá informar a url orginal em formato de texto e opcionalmente uma data de expiração no formato numérico (`timestamp`).
- Ao persistir os dados no banco em caso de não haver data de expiração a mesma deverá ser 0.
- Deverá ser retornado a usuário as informações persistidas, assim como a nova url encurtada.
- Ao acessar o link curto no navegador o servidor deve redirecionar o mesmo para o link original.

### Recursos

## Create Shortener URL

### Request

`POST /shorten`

    curl -X POST https://reqbin.com/echo/post/json
    -H 'Content-Type: application/son'
    -d '{"originalUrl":  "https://github.com/alemaocastro1986/url-shortener","expirationDate": 1639653300315}'

### Response

    HTTP/1.1 200 OK
    HTTP/1.1 201 Created
    X-Powered-By: Express
    Content-Type: application/json; charset=utf-8
    Content-Length: 207
    ETag: W/"cf-ii+rh+DnK70dd+zVhzjphYo+YzY"
    Date: Thu, 16 Dec 2021 11:54:37 GMT
    Connection: close

    {
      "_id": "61bb28e24282c3d2cdbe1be6",
      "hash": "gODEWAjoy",
      "originalUrl": "https://github.com/alemaocastro1986/url-shortener",
      "shortUrl": "http://localhost:3009/api/gODEWAjoy",
      "expirationDate": 1639656900872,
      "__v": 0
    }

## Clonando projeto

Com o git instalado, voce pode rodar:

### `git clone https://github.com/alemaocastro1986/url-shortener.git <nome-projeto>`

### `cd <nome-projeto>`

## Scripts disponíveis

No diretório do projeto, você pode rodar:

### `yarn start:dev`

Executa o aplicativo no modo de desenvolvimento.\
Abra [http://localhost:3000](http://localhost:3000) para visualizar em seu navegador.

### `yarn start`

Compila o aplicativo para produção na pasta `dist`.

## Autor

Andrius Cunha Castro

[![Linkedin Badge](https://img.shields.io/badge/-Andrius%20Cunha%20Castro-blue?style=social&logo=Linkedin&link=https://www.linkedin.com/in/andrius-cunha-castro/)](https://www.linkedin.com/in/andrius-cunha-castro/)
[![Gmail Badge](https://img.shields.io/badge/-alemaocastro1986@gmail.com-c14438?style=social&logo=Gmail&link=mailto:alemaocastro1986@gmail.com)](mailto:alemaocastro1986@gmail.com)
