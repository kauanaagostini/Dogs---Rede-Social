<h1 align="center">
  <img src="./src/Assets/dogs.svg"> | Dogs
</h1>

## Índice

- [1. Introdução](#1-introdução)
- [2. Dogs](#2-dogs)
- [3. Estrutura e funcionalidades](#3-estrutura-e-funcionalidades)
- [4. Ferramentas Utilizadas](#4-ferramentas-utilizadas)
- [5. Considerações Finais](#5-considerações-finais)
 ---
<br>

## 1. Introdução
Aplicação Web desenvolvida durante o curso de React completo da <strong>[Origamid](https://www.origamid.com/)</strong>.

---
<br>

## 2. Dogs

O projeto consiste em desenvolver uma rede social para cachorros, colocando em prática tudo que foi aprendido durante o curso de <strong>[React Completo](https://www.origamid.com/curso/react-completo/)</strong>.

<div align="center">
  <img src="./src/Assets/readme/feed-gif.gif" width="500px"/>
</div>
<br>

A API utilizada nesse projeto é a API desenvolvida pelo curso <strong>[WordPress REST API Dogs](https://www.origamid.com/curso/wordpress-rest-api-dogs/)</strong>.

<br>

Como desenvolvimento de uma rede social, foi criada uma página de Login:

<div align="center">
  <img src="./src/Assets/readme/visualizar-foto-gif.gif" width="500px"/>
</div>
<br>

Onde após logado o usuário é redirecionado para a página <strong>Minha Conta</strong>, onde consta todas as suas postagens.
Uma vez logado o usuário tem acesso ao menu de navegação que pode levá-lo a postagem de novas fotos:

<div align="center">
  <img src="./src/Assets/readme/postar-gif.gif" width="500px"/>
</div>
<br>


Possui também acesso a área de estatísticas, onde através da biblioteca <strong>`Victory`</strong>, foi possível desenvolver gráficos para visualizar os acessos da página e de cada foto:

<div align="center">
  <img src="./src/Assets/readme/estatisticas-gif.gif" width="500px"/>
</div>
<br>

O usuário logado, poderá também comentar nas postagens dos demais usuários:

<div align="center">
  <img src="./src/Assets/readme/cometario-gif.gif" width="500px"/>
</div>
<br>


Além da página de login foi desenvolvida a página de cadastro, ondem o usuário pode estar se cadastrando somente com um nome de usuário, e-mail e senha.
Esses campos possuem validação em tempo real para campo vazio, e-mail válido e senha forte.

<div align="center">
  <img src="./src/Assets/readme/cadastro-gif.gif" width="500px"/>
</div>
<br>

E para uma melhor experiência de usuário, foi desenvolvido uma página onde caso ele esqueça a senha que foi cadastrada no site, ele possa fazer a recuperação dela. A senha pode ser recuperada através do e-mail ou do nome do usuário.

<div align="center">
  <img src="./src/Assets/readme/perdeu-senha-gif.gif" width="500px"/>
  <img src="./src/Assets/readme/perdeu-senha-2-gif.gif" width="500px"/>
</div>
<br>

Essa é uma aplicação bem completa, foi desenvolvido Hooks específicos para determinadas chamadas, além de Rotas privadas, animações com SVG, `useContext`, e tudo isso é explicado no curso.

---
<br>

## 4. Ferramentas Utilizadas

As seguintes ferramentas foram usadas na construção do projeto:

- [x] ReactJS
- [x] React Router Dom
- [x] JavaScript
- [x] CSS
- [x] Victory

---
<br>

## 5. Considerações Finais

Gostou da rede social, e deseja interagir com ela?
A Origamid fez o deploy do projeto para quem quiser interagir com a aplicação. Acesse:

<table align="center">
  <tr>
    <td align="center">
      <a href="https://dogs.origamid.dev/">
        <img src="./src/Assets/login.jpg" width="150px" style="border-radius: 50%"/>
      </a>
    </td>
    <td align="justify">
      Login: <strong>dog</strong>
      <br>
      Senha: <strong>dog</strong>
    </td>
  </tr>
</table>

<strong>Lembrando:</strong> a cada 10 minutos é restaurado os dados originais da aplicação, apagando postagens, comentários, etc.

Obrigada ao professor <strong>André Rafael</strong> pelo maravilhoso curso, e pela didática.

---
<div align="center">
  <a href="https://github.com/kauanaagostini"><img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/71272642?s=460&u=16e95ea294359879e6e99ad563f7e102f0823246&v=4" width="100px;" alt=""/><br /><sub><b>Kauana Maria Agostini</b></sub></a>
</div>