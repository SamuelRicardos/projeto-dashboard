# Dashboard Financeiro

Este é um projeto de **Dashboard Financeiro** desenvolvido com [Next.js](https://nextjs.org), utilizando autenticação via **Firebase** e interface estilizada com **Tailwind CSS** e **Shadcn UI**.

## Tecnologias utilizadas

⚛️ React: Utilizado para criar a interface de forma modular e eficiente, permitindo que o estado da aplicação seja gerenciado facilmente com componentes reativos.

⚡ Next.js: Escolhido por ser uma framework otimizada para SEO e renderização do lado do servidor (SSR), o que melhora a performance e torna o app mais escalável.

🌪️ TailwindCSS: Utilizado para um design customizável e responsivo, garantindo uma estilização rápida e flexível sem complicações.

🎨 ShadcnUI: Oferece componentes prontos, clean e altamente personalizáveis, que se integram bem com o TailwindCSS, acelerando o desenvolvimento sem perder qualidade no design.

🔥 Firebase: Usado para autenticação de usuários e backend sem servidor, proporcionando uma solução fácil e escalável para o gerenciamento de dados e usuários.

📊 Recharts: Biblioteca utilizada para a criação de gráficos interativos e dinâmicos, permitindo visualizar dados financeiros de forma clara e intuitiva, facilitando a análise e tomada de decisões.

🌙 Zustand (Tema Claro e Escuro): Utilizei o Zustand para gerenciar o estado da aplicação e permitir a troca entre os modos de tema claro e escuro. Com um simples store, a mudança de tema é realizada de forma eficiente, proporcionando uma experiência de usuário mais personalizada e moderna. Isso garante que a interface se adapte de acordo com as preferências do usuário, mantendo a consistência e performance em todos os dispositivos.

## Funcionalidades

- 🔒 Autenticação de usuários (Cadastro & Login) com Firebase (Use esse usuário para acessar o dashboard, email: test@gmail.com, senha:123456)
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
