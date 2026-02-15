# DIO Clone - React

Um clone da plataforma DIO (Digital Innovation One) desenvolvido com React, incluindo autenticação, cadastro de usuários, e feed com cards de posts.

## 🎯 Sobre o Projeto

Este projeto é uma recriação da interface da plataforma DIO, uma plataforma de educação e networking para desenvolvedores. O projeto demonstra conceitos modernos de desenvolvimento React, incluindo:

- **Autenticação de usuários** com validação de formulários
- **Cadastro de novos usuários** 
- **Feed interativo** com posts
- **Componentes reutilizáveis** bem estruturados
- **Integração com API** (JSON Server)
- **Styled Components** para estilização
- **React Router** para navegação

## 🚀 Tecnologias Utilizadas

- **React 19.2.4** - Framework JavaScript
- **React Router DOM 7.13.0** - Roteamento
- **Styled Components 6.3.9** - Estilização
- **React Hook Form 7.71.1** - Gerenciamento de formulários
- **Yup** - Validação de esquemas
- **Axios** - Cliente HTTP
- **React Icons 5.5.0** - Ícones
- **JSON Server** - API mockada

## 📋 Funcionalidades

✅ **Autenticação (Login)**
- Validação de email e senha
- Integração com API mockada
- Redirecionamento após login bem-sucedido

✅ **Cadastro de Usuários**
- Formulário com validação
- Salva novos usuários no banco de dados
- Redirecionamento para o feed

✅ **Feed**
- Cards de posts com informações do usuário
- Imagens de banner e perfil
- Ranking dos top 5 usuários da semana
- Design responsivo

✅ **Componentes Reutilizáveis**
- Button com variantes
- Input com validação
- Card para posts
- Header com navegação
- UserInfo com indicador de progresso

## 🛠️ Como Instalar

### Pré-requisitos
- Node.js (v14 ou superior)
- npm ou yarn

### Passos

1. **Clone o repositório**
```bash
git clone https://github.com/luis-sandri/dio-clone-react.git
cd dio-clone-react
```

2. **Instale as dependências**
```bash
npm install
```

## ▶️ Como Rodar o Projeto

### 1. Inicie o servidor de API (JSON Server)
```bash
npm run api
```
Isso inicia o servidor na porta **8001** com o banco de dados mockado.

### 2. Em outro terminal, inicie a aplicação React
```bash
npm start
```
Abre automaticamente em [http://localhost:3000](http://localhost:3000)

## 📂 Estrutura do Projeto

```
src/
├── assets/              # Imagens e recursos
├── components/          # Componentes reutilizáveis
│   ├── button/
│   ├── card/
│   ├── header/
│   ├── input/
│   └── userInfo/
├── pages/              # Páginas da aplicação
│   ├── cadastro/       # Página de registro
│   ├── feed/           # Página principal
│   ├── home/           # Página inicial
│   └── login/          # Página de login
├── services/           # Serviços (API)
├── styles/             # Estilos globais
├── App.js              # Componente principal
└── index.js            # Entrada da aplicação
```

## 🔐 Credenciais de Teste

Você pode fazer login com uma das seguintes contas:

**Usuário 1:**
- Email: `pablo@email.com`
- Senha: `123456789`

**Usuário 2:**
- Email: `luis@email.com`
- Senha: `123456789`

Ou criar uma nova conta na página de **Cadastro**.

## 🎨 Componentes Principais

### Header
Navegação principal com logo da DIO e opções de login/logout.

### Button
Botão reutilizável com suporte a variantes (primary, secondary).

### Input
Campo de entrada com suporte a validação, ícones laterais e mensagens de erro.

### Card
Componente para exibir posts no feed com informações do usuário.

### UserInfo
Exibe informações do usuário com indicador de progresso/percentual.

## 📡 API (JSON Server)

A aplicação usa JSON Server para simular uma API. O banco de dados é armazenado em `db.json` na raiz do projeto.

**Endpoints:**
- `GET /users` - Lista todos os usuários
- `POST /users` - Cria um novo usuário
- `GET /users/:id` - Obtém um usuário específico

## 🔄 Fluxo da Aplicação

1. **Home** → Página de boas-vindas
2. **Login** → Autentifica o usuário
3. **Cadastro** → Registra novo usuário
4. **Feed** → Página principal com posts (requer autenticação)

## 📝 Scripts Disponíveis

```bash
npm start          # Inicia a aplicação em desenvolvimento
npm run api        # Inicia o JSON Server
npm run build      # Cria build para produção
npm test           # Executa testes
npm run eject      # Ejeta configurações do CRA (irreversível)
```

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
npm install
```

### Porta 3000 já está em uso
```bash
# Para trocar a porta:
PORT=3001 npm start
```

### Porta 8001 já está em uso
```bash
# Para trocar a porta:
npm run api -- --port 8002
```

## 🚀 Deploy

A aplicação pode ser facilmente deployada em:
- **Vercel** - `vercel`
- **Netlify** - Conecte seu repositório GitHub
- **Heroku** - Use Procfile e buildpacks

## 👨‍💻 Autor

Luis Sandri - [GitHub](https://github.com/luis-sandri)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para fazer um fork do projeto e enviar um pull request.

---

**Desenvolvido em 2026 com ❤️ para aprender React**


### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
