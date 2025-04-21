Proxxy Ecommerce 


Este repositório contém um ecommerce em desenvolvimento, utilizando as tecnologias Sanity, Next.js 15, Framer Motion, TypeScript, Clerk, e Shadcn UI. O projeto foi desenvolvido como parte de um teste técnico e, devido a alguns desafios externos, ainda está em andamento.

Tecnologias Usadas
* Sanity: Utilizado como CMS para gerenciamento de produtos, categorias e dados do backend. A escolha do Sanity permite flexibilidade e fácil integração com o Next.js.

* Next.js 15: Framework de React que proporciona renderização do lado servidor (SSR) e otimização de performance. Utilizei novas funcionalidades do Next, como o sistema de forms com action para search.

* Framer Motion: Biblioteca para animações fluidas e interações no frontend.

* TypeScript: Utilizado para garantir tipagem estática e segurança no código.

* Clerk: Utilizado para autenticação de usuários, fornecendo um sistema de login e registro simples e seguro.

* Shadcn UI: Biblioteca de componentes de UI estilizados, que facilita a criação de interfaces de usuário responsivas e elegantes.

Funcionalidades Implementadas
* Catálogo de Produtos: Página principal com um grid de produtos, onde o usuário pode visualizar produtos disponíveis para compra.

* Página de Detalhes do Produto: Exibição detalhada dos produtos, com informações como preço, descrição e imagens.

* Autenticação de Usuário: Sistema de login e registro de usuários utilizando o Clerk.

* Animações no Frontend: Animações de entrada e transição suave utilizando Framer Motion.

* Responsividade: Utilização de Tailwind CSS para garantir uma experiência de usuário responsiva, especialmente em dispositivos móveis.

* Search Form: Implementação do novo sistema de forms com action do Next.js para realizar buscas no catálogo.

Desafios e Dificuldades

Durante o desenvolvimento, enfrentei alguns desafios relacionados ao acesso a APIs externas:

APIs Fora do Ar: As APIs fornecidas estavam fora do ar, o que me fez revisar a arquitetura do backend e buscar alternativas dentro do próprio Sanity para gerenciamento dos dados do ecommerce.

Site da Submarino Fora do Ar: O site da Submarino, que era uma das fontes de dados para o projeto, não estava mais disponível.

Tempo Limitado: Estive viajando e só consegui retornar no dia do prazo final, o que impactou o tempo disponível para finalizar o projeto. Apesar disso, consegui implementar as funcionalidades principais e deixar o projeto em um estado funcional, mas ainda há algumas melhorias e ajustes a serem feitos.

Decisões de Arquitetura
1. Sanity como Backend:
A escolha do Sanity para gerenciar os dados do ecommerce foi estratégica devido à sua flexibilidade e facilidade de integração com o Next.js. Ele me permite alterar e gerenciar os produtos de maneira eficiente através de um CMS, e a estrutura de GROQ queries facilita a busca e a manipulação dos dados.

2. Uso do Framer Motion:
As animações são uma parte importante da experiência de usuário em um ecommerce. Decidi usar o Framer Motion para garantir transições suaves e interações visuais atrativas para os usuários, especialmente ao exibir produtos e quando o usuário interage com o grid de produtos.

3. UI com Shadcn UI:
Utilizei Shadcn UI para criar uma interface de usuário com componentes modernos e estilosos, como botões, inputs e cards de produtos, aproveitando sua integração com Tailwind CSS para garantir uma aparência consistente e responsiva.

Melhorias Futuras
Implementação de Carrinho

Otimização de Performance: Melhorar a performance em telas com muitos produtos, utilizando técnicas como lazy loading e otimização de imagens.

Testes e Validação: Adicionar mais testes unitários e de integração para garantir que as funcionalidades principais estão funcionando conforme o esperado.

Design Responsivo: Melhorar o design responsivo para garantir uma boa experiência de usuário em todos os dispositivos.
