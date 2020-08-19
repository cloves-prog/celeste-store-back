# Motivação

Esse projeto tem com finalidade, apresentar uma solução para resolver um problema da loja [Tem de tudo](https://github.com/matheuscatossi/tem-de-tudo-development-test).

[![Build Status](https://travis-ci.com/cloves-prog/celeste-store-back.svg?branch=master)](https://travis-ci.com/cloves-prog/celeste-store-back)

## Descrição

Essa aplicação foi construida utilizando o [Adonis](https://preview.adonisjs.com/)  que é um framework para a plataforma NodeJS.

### Porque decidi utilizar essa tecnologia?
- Agilidade na construção de aplicações;
- Utiliza TypeScript;
- Ótima estrutura de arquivos;
- Utiliza o [Lucid](https://preview.adonisjs.com/guides/database/introduction) , ORM agnóstico a banco de dados;
- Tem um command line bem completo;
- Adota diversos design patterns em sua arquitetura.

## Rodando o projeto no seu ambiente local
NodeJS >= 12.18.2

### Copie o arquivo `.env.example` > `.env` e preencha as variaveis


### Instale as dependencias do projeto

```
yarn
```

### Executa o build

```
yarn build
```

### Executa o build


```
yarn build
```

### Executa as migrations para criar as tabelas no banco
```
node ace migration:run
```

### Executa o seeder para criar o usuário principal
```
node ace db:seed
```
Obs.
Deixei um usuário padrão criado na base
- Email: celeste@teste.com
- Senha: celeste123=


### inicie o node apontando para pasta `build/server.js`

```
node build/server.js
```
