<h1 align="center">
  <img alt="A imagem contém um notebook e um smartphone com telas da aplicação" title="Banner da aplicação Be The Hero" src="./assets/screenshots/banner.png" />
</h1>

<h4 align="center"> 
	Semana Omnistack #11 - Be The Hero
</h4>

<div align="center">
  <img src="https://img.shields.io/github/repo-size/marcel099/rs-so-11-be-the-hero.svg">
  <img src="https://img.shields.io/github/last-commit/marcel099/rs-so-11-be-the-hero.svg">
  <img src="https://img.shields.io/github/issues/marcel099/rs-so-11-be-the-hero.svg">
  <img src="https://img.shields.io/github/issues-closed/marcel099/rs-so-11-be-the-hero.svg">
  <img src="https://img.shields.io/github/license/marcel099/rs-so-11-be-the-hero.svg">
  <img src="https://img.shields.io/github/stars/marcel099/rs-so-11-be-the-hero.svg?style=social">
</div>

* [Índice](#índice)
* [Sobre](#sobre-o-projeto)
  * [Tecnologias](#principais-tecnologias-utilizadas)
* [Instalação local](#instalação-local)
* [Créditos](#créditos)

## Sobre o projeto

O projeto foi desenvolvido durante a primeira edição do evento Semana Omnistack proporcionado pela empresa [Rocketseat](https://rocketseat.com.br/). Baseou-se em um layout elaborado no Figma.

O sistema, desenvolvido em JavaScript, é composto de um servidor HTTP Node, um [site](https://be-the-hero.marcel099.vercel.app/) em React e um aplicativo móvel em React Native.

A opção por essas ferramentas foi realizada pela Rocketseat por acreditarem formar um conjunto de tecnologias poderoso ao permitir desenvolver desde o Back-End até o aplicativo móvel em uma só linguagem: o JavaScript.

### Principais tecnologias utilizadas

O sistema foi desenvolvido em JavaScript. É composto de 3 partes:

- Back-End
  - [Node.js](https://nodejs.org/en/)
  - [Express](https://expressjs.com/)
  - [Knex](https://knexjs.org/)
  - [PostgreSQL](https://www.postgresql.org/)
- Front-End Web
  - [Create React App](https://create-react-app.dev/)
  - [React](https://react.dev/)
  - [React Router](https://reactrouter.com/)
- Front-End Mobile
  - [React Native](https://reactnative.dev/)
  - [Expo](https://expo.dev/)
  - [React Navigation](https://reactnavigation.org/) - [Stack](https://reactnavigation.org/docs/stack-navigator/)
  - [Expo Mail Composer](https://docs.expo.dev/versions/latest/sdk/mail-composer)

Alguns pontos a destacar:

- Uso de [Deep Linking](https://reactnative.dev/docs/linking) para envio de mensagem no WhatsApp no smartphone
- Envio de e-mail com [Expo Mail Composer](https://docs.expo.dev/versions/latest/sdk/mail-composer) no smartphone

Se desejar explorar as rotas do servidor HTTP Node desenvolvido para esse sistema, poderá fazer isso através do [Insomnia](https://insomnia.rest/).

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Semana%20Omnistack%20%2311%20-%20Be%20The%20Hero&uri=https%3A%2F%2Fgithub.com%2Fmarcel099%2Frs-so-11-be-the-hero%2Fblob%2Fmaster%2Fassets%2Finsomnia_collection.json)

## Instalação local

Passos para atingir isso pode ser conferido <a href="./INSTALLATION.md">neste arquivo</a>.

## Créditos

Credito a elaboração do modelo do banner deste documento e do banner social ao autor desconhecido desta [postagem](https://mckups.com/pixel-4-and-pixelbook-go-mockup/) no site [Mckups](https://mckups.com). Foi adaptado por mim de acordo com as características deste projeto.

## Licença

Este projeto está sob a licença MIT. Para maiores detalhes acesse o <a href="./LICENSE.md">arquivo de licença</a>.
