🛡️ Autenticação JWT com React e Cookies
Este projeto implementa um sistema de login e registro utilizando React no frontend e JWT (JSON Web Tokens) para a autenticação. Ao invés de armazenar o token no localStorage, ele é armazenado de forma segura nos cookies HTTP-only, garantindo uma camada adicional de proteção contra ataques como XSS (Cross-Site Scripting).

📋 Descrição do Sistema
O sistema é composto por duas funcionalidades principais:

Login: O usuário pode inserir suas credenciais para se autenticar. Após o login bem-sucedido, o JWT é gerado pelo backend e enviado para o frontend, sendo armazenado em um cookie HTTP-only.

Registro: Permite que novos usuários se cadastrem no sistema. Após o registro, os dados são enviados ao backend para serem processados e armazenados. O usuário pode, então, fazer login.

Validação de Token: O sistema inclui um botão para validar o token armazenado no cookie. A validação é feita através de uma requisição ao backend, que verifica se o token é válido ou se já expirou.

🎯 Objetivo
O objetivo deste projeto é demonstrar como criar um sistema de autenticação JWT com React, utilizando cookies em vez de localStorage para armazenar o token. Esse método de armazenamento é mais seguro, pois os cookies HTTP-only não podem ser acessados via JavaScript, protegendo os tokens de ataques client-side.

🚀 Tecnologias Utilizadas
Frontend:
React: Biblioteca para a criação da interface.
Axios: Utilizado para enviar requisições HTTP para o backend.
CSS: Para estilizar a interface de maneira moderna e responsiva.
Backend:
JWT (JSON Web Tokens): Utilizado para gerar tokens de autenticação.
Express.js (exemplo de backend, não incluído no repositório): Framework utilizado para lidar com as requisições de autenticação no servidor.

🔐 Utilização do JWT
O JWT (JSON Web Token) é um padrão utilizado para garantir a comunicação segura entre o cliente e o servidor. Quando o usuário faz login com sucesso:

O backend gera um token JWT.
Este token é enviado ao frontend como um cookie HTTP-only.
O cookie é configurado para ser acessível apenas pelo servidor, garantindo que ele não possa ser manipulado via JavaScript no frontend.
Sempre que o usuário interagir com áreas autenticadas do sistema, o cookie contendo o token JWT será automaticamente enviado junto às requisições HTTP, permitindo que o backend valide o token e autentique o usuário.

🔒 Armazenamento em Cookies e Não em localStorage
Diferente de armazenar o token em localStorage, optamos por armazená-lo em cookies HTTP-only devido aos seguintes motivos:

Segurança: Cookies HTTP-only não podem ser acessados por scripts no navegador, evitando vulnerabilidades como XSS.
Envio Automático: Cookies são enviados automaticamente com todas as requisições HTTP para o domínio que os gerou, facilitando a autenticação em requisições subsequentes.

📂 Estrutura do Projeto

frontend/
  ├── src/
  │   ├── components/
  │   │   ├── Login.js          # Componente de Login
  │   │   ├── Register.js       # Componente de Registro
  │   │   ├── ValidateToken.js  # Componente para Validar o Token
  │   │   ├── AuthContainer.js  # Componente para Autenticar a Validação do Token
  │   ├── App.js                # Arquivo principal de configuração
  │   ├── App.css               # Estilos da aplicação
  │   └── index.js              # Ponto de entrada da aplicação React
  └── README.md                 # Este arquivo README
  

⚙️ Como Executar o Projeto
Pré-requisitos:
Node.js
NPM (ou Yarn)

Backend:
Este projeto presume que você tenha um backend configurado que gere tokens JWT e suporte autenticação via cookies. Um exemplo de API com Node.js e Express pode ser utilizado.

Frontend:
Clone o repositório:

git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

cd frontend
npm install
Execute a aplicação:

npm start
Acesse a aplicação no navegador:

http://localhost:3000


