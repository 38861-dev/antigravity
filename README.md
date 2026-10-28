# Portfólio Pessoal — Victor Hugo

Portfólio moderno, responsivo e autêntico desenvolvido em **HTML5**, **CSS3** e **JavaScript puro (Vanilla JS)** para apresentar a trajetória, habilidades, projetos práticos e evolução como **Desenvolvedor em formação**.

O projeto foi projetado com identidade visual sóbria (Dark Slate Theme), tipografia técnica inspirada em ambientes de desenvolvimento, layout adaptável para mobile/tablet/desktop e código limpo, sem dependência de bibliotecas ou frameworks externos.

---

## 📁 Estrutura de Arquivos

```text
├── index.html              # Estrutura semântica do portfólio (Hero, Sobre, Habilidades, Projetos, Evolução, Contato)
├── style.css               # Folha de estilos completa com variáveis CSS, responsividade e modo acessível
├── script.js               # Lógica interativa (menu mobile, filtros, scroll spy, cópia de e-mail e formulário)
├── assets/                 # Recursos visuais locais (zero dependência externa de imagens quebradas)
│   ├── favicon.svg         # Ícone de aba personalizado para o desenvolvedor
│   ├── project-appnova.svg # Prévia visual do projeto AppNova (Catálogo & APIs)
│   ├── project-java.svg    # Diagrama e código do projeto Java POO
│   └── project-networks.svg# Topologia de redes Cisco Packet Tracer (VLANs & Roteamento)
└── README.md               # Documentação, instruções de personalização e deploy
```

---

## 🚀 Como Executar Localmente

Como o projeto é construído em tecnologias web nativas, **nenhuma instalação pesada é obrigatória**:

### Opção 1: Diretamente no Navegador
- Dê um duplo clique no arquivo `index.html` ou clique com o botão direito e selecione **"Abrir com" > Google Chrome / Microsoft Edge / Firefox**.

### Opção 2: Com VS Code (Live Server)
1. Abra a pasta no **Visual Studio Code**.
2. Clique com o botão direito sobre o arquivo `index.html`.
3. Escolha **"Open with Live Server"**.

### Opção 3: Via Terminal (Node.js ou Python)
Se tiver Python ou Node instalados no computador:
```bash
# Com Python
python -m http.server 3000

# Ou com Node.js
npx serve .
```
Acesse no seu navegador: `http://localhost:3000`

---

## ✏️ Guia de Personalização (O que preencher)

Todos os campos foram claramente identificados para que você possa atualizar suas informações reais com facilidade:

### 1. Seus links de redes sociais e e-mail
No arquivo [`index.html`](index.html), localize a seção `<!-- ==================== SEÇÃO CONTATO ==================== -->` e substitua:
- `SEU_USUARIO` pelo seu nome de usuário no GitHub:
  ```html
  <a href="https://github.com/SEU_USUARIO" target="_blank" ...>
  ```
- `SEU_USUARIO` pelo seu identificador no LinkedIn:
  ```html
  <a href="https://linkedin.com/in/SEU_USUARIO" target="_blank" ...>
  ```
- `seuemail@exemplo.com` pelo seu endereço de e-mail real:
  ```html
  <span class="contact-value" id="email-address-text">seuemail@exemplo.com</span>
  ```

Também no topo de [`script.js`](script.js), você pode atualizar o objeto de configuração central:
```javascript
const USER_CONFIG = {
  nome: 'Victor Hugo',
  emailPadrao: 'seuemail@exemplo.com',
  githubUrl: 'https://github.com/SEU_USUARIO',
  linkedinUrl: 'https://linkedin.com/in/SEU_USUARIO'
};
```

### 2. Links de repositórios dos projetos
No [`index.html`](index.html), nos cards de projetos (`#projetos`):
- No card do **AppNova**: substitua `https://github.com/SEU_USUARIO/appnova` pelo link real do seu repositório.
- No card de **Java**: substitua `https://github.com/SEU_USUARIO/exercicios-java` pelo repositório dos seus exercícios.
- No card de **Redes**: substitua `https://github.com/SEU_USUARIO/praticas-redes` pelo link de documentação ou arquivos `.pkt`.

### 3. Como adicionar um novo projeto futuramente
Basta copiar o modelo de card abaixo e colar dentro da `<div class="projects-grid">` em `index.html`:

```html
<article class="project-card" data-category="web">
  <div class="project-preview-wrapper">
    <img src="assets/sua-imagem.svg" alt="Prévia do projeto" class="project-img" loading="lazy">
    <div class="project-category-tag">Categoria</div>
  </div>
  <div class="project-body">
    <div class="project-meta-header">
      <h3 class="project-title">Nome do Novo Projeto</h3>
      <span class="project-status-badge status-active">Concluído</span>
    </div>
    <p class="project-description">
      Descrição clara e direta do que o projeto resolve e quais técnicas foram empregadas.
    </p>
    <div class="project-tech-stack">
      <span class="tech-tag">Tecnologia 1</span>
      <span class="tech-tag">Tecnologia 2</span>
    </div>
    <div class="project-actions">
      <a href="LINK_DO_GITHUB" target="_blank" class="btn-project btn-project-primary">Ver no GitHub</a>
      <a href="LINK_DO_DEPLOY" target="_blank" class="btn-project btn-project-ghost">Demonstração ↗</a>
    </div>
  </div>
</article>
```

---

## 🌐 Publicação na Vercel

O portfólio é um site estático moderno (HTML/CSS/JS nativo), sendo **100% compatível com a Vercel** sem necessidade de configurações adicionais.

### Método Recomendado (Via GitHub):
1. Crie um repositório no seu GitHub (exemplo: `portfolio`).
2. Envie os arquivos desta pasta:
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio inicial de Victor Hugo"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/portfolio.git
   git push -u origin main
   ```
3. Acesse [vercel.com](https://vercel.com) e faça login com sua conta do GitHub.
4. Clique em **"Add New..." > "Project"**.
5. Selecione o repositório `portfolio` e clique em **"Deploy"**.
6. A Vercel detectará automaticamente como site estático e gerará um link público seguro (ex: `https://portfolio-victorhugo.vercel.app`).

### Método via Vercel CLI (Direto do Terminal):
```bash
# Faça login e publique com um único comando
npx vercel
```

---

## ♿ Acessibilidade e Boas Práticas

- **Semântica HTML5**: Uso rigoroso de `<header>`, `<nav>`, `<main>`, `<section>`, `<article>` e `<footer>`.
- **Navegação por Teclado**: Foco visível (`:focus-visible`) com contraste em todos os botões e links.
- **Link de Acessibilidade**: Botão oculto "Pular para o conteúdo principal" ativado por Tab.
- **Respeito ao Sistema**: Suporte a `@media (prefers-reduced-motion: reduce)` para usuários sensíveis a movimento.
- **Contraste de Cores**: Relação de contraste entre texto e fundo adequada às diretrizes WCAG AA.
