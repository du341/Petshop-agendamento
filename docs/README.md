# FECAP - Fundação de Comércio Álvares Penteado

<p align="center">
<a href= "https://www.fecap.br/"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhZPrRa89Kma0ZZogxm0pi-tCn_TLKeHGVxywp-LXAFGR3B1DPouAJYHgKZGV0XTEf4AE&usqp=CAU" alt="FECAP - Fundação de Comércio Álvares Penteado" border="0"></a>
</p>


## 🎮 Nexus-aventureiro-digital - Desafio do Aventureiro Digital

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
- Banco de dados versionado com arquivo `.sql`

---

## 📂 Estrutura de Pastas

```
petshop-agendamentos/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controller/
│   │   ├── agendamentoController.js
│   │   └── authController.js
│   ├── middlewares/
│   │   ├── authMiddlewares.js
│   │   └── upload.js
│   ├── routes/
│   │   ├── agendamentoRoutes.js
│   │   └── authRoutes.js
│   ├── uploads/ (imagens salvas)
│   ├── .env
│   └── server.js
├── frontend/
│   ├── index.html (tela de entrada)
│   ├── cadastro.html (cadastro de usuário)
│   ├── login.html (autenticação)
│   ├── agendamento.html (formulário com upload)
│   ├── listagem.html (exibição dos agendamentos)
│   └── style.css (estilo global)
├── banco_petshop.sql (script do banco)
├── package.json
└── README.md
```

---

---

## 🔗 Links para Avaliação

- 🌐 Acesse a interface do sistema (GitHub Pages):  
  [https://du341.github.io/petshop-agendamentos/](https://du341.github.io/petshop-agendamentos/)

- 📁 Repositório completo com frontend, backend e banco de dados:  
  [https://github.com/du341/petshop-agendamentos](https://github.com/du341/petshop-agendamentos)





