# Marvelverse

Marvelverse é uma aplicação web que utiliza a API Pública da Marvel para exibir informações sobre esse universo.

## Funcionalidades

- **Autenticação na API**
- **Listagem de Personagens** 
- **Destaque para Criadores** 
- **Catálogo de Quadrinhos** 

## Tecnologias Utilizadas

- React.js
- TypeScript
- Styled Components
- API Pública da Marvel

 ## Rotas

 - **/signin** - Autenticação e edição das keys de acesso da API.
 - **/characters** - Listagem de todos os personagens
 - **/characters/{id}** - Página de detalhes de um personagem.
 - **/comics** - Listagem de todos os quadrinhos.
 - **/comics/{id}** - Página de detalhes de um quadrinho.
 - **/creators**  - Listagem de todos os criadores
 - **/creators/{id}** - Página de detalhes de um criador.

## Como Começar

1. Clone o repositório:

   ```bash
    git clone <url do repositório>
    ```

2. Instale as dependências:

   ```bash
    yarn install
    ```

3. Execute a aplicação:

   ```bash
    yarn dev
    ```

4. Ou acesse o [deploy da aplicação](https://marvelverse-qst12aqso-anasmatos.vercel.app).
