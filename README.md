# Dashboard Financeiro

Este é um projeto de **Dashboard Financeiro** desenvolvido com [Next.js](https://nextjs.org), utilizando autenticação via **Firebase** e interface estilizada com **Tailwind CSS** e **Shadcn UI**.

## Funcionalidades

- 🔒 Autenticação de usuários (Cadastro & Login) com Firebase
- 📊 Painel interativo para visualização financeira
- 💳 Gerenciamento e acompanhamento de despesas
- 📈 Visualização de dados com gráficos e tabelas
- 🎨 Interface moderna e responsiva com Tailwind CSS
- 🚀 Alto desempenho e otimização com Next.js

## Como iniciar o projeto

Primeiro, clone o repositório e instale as dependências:

```bash
# Clonar o repositório
git clone https://github.com/seuusuario/projeto-dashboard.git

# Instalar dependências
npm install  # ou yarn install
```

Depois, inicie o servidor de desenvolvimento:

```bash
npm run dev  # ou yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador para acessar o dashboard.

## Configuração das variáveis de ambiente

Vá em na pasta lib e coloque as configurações do seu projeto do Firebase em firebase.js:

```bash
const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_SENDER_ID",
  appId: "SEU_APP_ID",
};
```

## Estrutura do projeto

```
/dashboard
├── app/          # Páginas e componentes do Next.js
├── components/   # Componentes reutilizáveis de UI
├── lib/          # Configuração do Firebase e utils
├── public/       # Arquivos estáticos
```
