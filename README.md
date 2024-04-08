# Teste Prático - Dti Digital

Este é um projeto para o teste prático da vaga de estágio da dti digital. O sistema determinará o petshop que oferece os menores preços de banho, considerando também a distância do canil do Sr. Eduardo.

## Premissas

- O sistema foi feito em ambiente Windows, IDE Visual Studio Code, Node v21.6.2 e Vite v5.2.8.
- Os navegadores web utilizados para teste foram Google Chrome, Mozilla Firefox e Opera.
- O sistema será executado em ambiente local, portanto não há necessidade de implementar acesso a uma API externa.
- O sistema possui um servidor na porta 8080 e recebe acesso de todas as portas.

## Decisões de Projeto

- Optei por usar o framework Express para implementar o back-end nesse projeto, pois é a ferramenta em que tenho mais experiência.
- Considerei a distância com relação ao canil quando retornei a resposta para o front-end (mais próximo tem maior prioridade).
- Implementei alguns testes unitários apenas no back-end, devido ao fato de eu não ter familiaridade com frameworks de teste no front-end.
- Fiz uso do Chakra para facilitar a estilização da página.

## Instruções para Executar o Sistema

1. Certifique-se de ter o Node instalado em sua máquina. 
2. Clone o repositório para sua máquina local.
3. Navegue até o diretório _Backend_ e rode o seguinte comando no terminal:

  ```bash
  npm start
  ```

4. Agora vá para o diretório _Frontend/petshop_front_ e execute no terminal:

  ```bash
  npm run dev
  ```

5. Você verá um endereço _http_ exibido no terminal. Copie-o e abra o link no seu navegador de preferência.
6. Agora você pode interagir com o formulário da página como quiser. Entradas inválidas retornarão um alerta.
7. Para acessar os testes no back-end, coloque o seguinte comando no terminal:

  ```bash
  npm test
  ```
  Você pode conferir os testes no diretório _Backend/tests_.
