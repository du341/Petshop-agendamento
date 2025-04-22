# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>




## 👥 Integrantes: <a href="https://www.linkedin.com/in/eduardo-araujo-33a1a2278/">Eduardo Araujo </a>


## 👨‍🏫 Professor:<a href="https://www.linkedin.com/in/francisco-escobar/">Francisco Escobar</a>.


## ✏️ Introdução

Este sistema foi desenvolvido para facilitar o agendamento de banhos em pet shops. Usuários podem se cadastrar, realizar login, agendar banhos com envio de imagens dos pets, e visualizar seus agendamentos em uma interface clara e funcional. O sistema também impede agendamentos duplicados no mesmo horário.

---


## 🚀 Funcionalidades

- Cadastro e login de usuário com autenticação JWT  
- Criação de agendamento com upload de imagem  
- Visualização dos agendamentos do usuário logado  
- Edição e exclusão dos agendamentos  
- Validação de horários duplicados  
- Preview da imagem antes do envio  
- Estilo moderno com CSS

---

## 🛠️ Tecnologias Utilizadas

- HTML5 + CSS3 (Frontend)  
- JavaScript (fetch API e DOM)  
- Node.js + Express (Backend)  
- MySQL (Banco de dados)  
- JWT + Bcrypt (Segurança)  
- Multer (Upload de arquivos)
- PostMan (teste do CRUD)


---

## ⚙️ Funcionamento Técnico

- Backend com rotas protegidas por token
- Upload de imagens com Multer
- Banco de dados relacional com integridade entre usuários e agendamentos
- Frontend dinâmico com JS puro
- Validações de formulários e preview de imagem
- Restrições de horários duplicados
- Layout responsivo com formulário centralizado e cards de listagem estilizados

---

## 🧩 Funcionalidades

- Login e Cadastro com autenticação  
- Criação de agendamento com imagem  
- Validação para evitar horários duplicados  
- Preview da imagem antes do upload  
- Visualização, edição e exclusão de agendamentos  
- Interface estilizada com CSS moderno  
- Proteção por token JWT  
- Estrutura modularizada (controllers, routes, middlewares)  
- Banco de dados versionado com arquivo .sql



---

## 🧪 Como Testar o Sistema

O sistema foi dividido em duas partes: uma interface visual (Frontend) disponível via GitHub Pages e um backend funcional (Node.js + MySQL) que precisa ser executado localmente.

### ✅ Teste da Interface (Frontend)

- Acesse a interface diretamente pelo link:  
  🔗 [https://du341.github.io/petshop-agendamentos/](https://du341.github.io/petshop-agendamentos/)

- Você poderá navegar pelas telas de login, cadastro, agendamento e listagem.

- ⚠️ **Importante:** Como o GitHub Pages é apenas visual, as funcionalidades de cadastro, login e agendamento não funcionarão nesse ambiente sem o backend ativo.

---

### 🖥️ Teste Completo com Backend (Local)

Para testar o sistema com todas as funcionalidades funcionando (cadastro, login, agendamento, edição, exclusão):

1. **Clone o repositório:**

---

2. **Instale as dependências do backend:**

   ```bash
   cd backend
   npm install
   ```

3. **Configure o ambiente criando o arquivo `.env`:**

   Dentro da pasta `backend`, crie um arquivo `.env` com os seguintes dados:

   ```
   DB_HOST=localhost
   DB_USER=seu_usuario_mysql
   DB_PASSWORD=sua_senha_mysql
   DB_NAME=petshop
   JWT_SECRET=sua_chave_secreta
   ```

4. **Crie o banco de dados:**

   Execute o arquivo `banco_petshop.sql` no seu MySQL para criar as tabelas e índices necessários.

5. **Inicie o servidor backend:**

   ```bash
   node server.js
   ```

---

### 🧪 Testes com Postman (opcional)

Você também pode testar os endpoints diretamente usando o Postman:

- `POST /api/auth/register` – Cadastro de usuário  
- `POST /api/auth/login` – Login e geração de token  
- `POST /api/agendamentos` – Criar novo agendamento  
- `GET /api/agendamentos` – Listar agendamentos do usuário logado  
- `PUT /api/agendamentos/:id` – Editar agendamento  
- `DELETE /api/agendamentos/:id` – Excluir agendamento



