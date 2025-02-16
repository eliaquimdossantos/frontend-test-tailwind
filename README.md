# Projeto de Gerenciamento de OKRs  

Este projeto foi desenvolvido como parte do processo seletivo para a posição de Pessoa Desenvolvedora Frontend na **TTZ**. O objetivo principal foi criar um painel para a **América Senior** gerenciar seus OKRs (Objectives and Key Results), conforme especificado no [repositório original](https://github.com/tootz-solucoes/frontend-test).  

## Objetivos Atendidos  

- **Implementação do Frontend**: Desenvolvi o frontend do painel de gerenciamento de OKRs utilizando o framework **Next.js**.  
- **Fidelidade ao Layout**: Segui o layout fornecido, com algumas melhorias de contraste, assegurando consistência tanto na versão desktop quanto mobile.  
- **Uso de Tecnologias Modernas**: Utilizei **Tailwind CSS** para estilização dos componentes, garantindo um design modular e altamente personalizável, além de bibliotecas open source, como Zod, para manter a qualidade e o padrão do código.  

## Como Executar o Projeto  

Para rodar o projeto localmente, siga os passos abaixo:  

### Pré-requisitos  

- Node.js instalado na máquina.  

### Passo a Passo  

1. **Clonar o Repositório**  

   ```bash
   git clone git@github.com:eliaquimdossantos/frontend-test-tailwind.git
   cd frontend-test-tailwind
   ```  

2. **Instalar as Dependências**  

   ```bash
   npm install
   ```  

3. **Adicionar Variáveis de Ambiente**  

   Crie o arquivo `.env` na raiz do projeto e adicione a seguinte variável de ambiente:  
   ```bash
   NEXT_PUBLIC_API_URL=
   ```  

4. **Iniciar o Servidor de Desenvolvimento**  

   ```bash
   npm run dev
   ```  

   O aplicativo estará disponível em `http://localhost:3000`.  

5. **Realizar Build do Projeto**  

   Antes de rodar o projeto em produção, é necessário gerar uma versão otimizada:  
   
   ```bash
   npm run build
   ```  

6. **Iniciar o Servidor em Produção**  

   Com a build concluída, inicie o servidor:  
   
   ```bash
   npm run start
   ```  

   O servidor estará rodando na porta definida ou, por padrão, em `http://localhost:3000`.  

### Estrutura do Projeto  

# Estrutura de Diretórios

- **`src/app/`**: Componentes de página, como pages de layouts.  
- **`src/components/`**: Componentes da interface de usuário no padrão Atomic Design.  
- **`src/contexts/`**: Contexts para gerenciamento de estado global.  
- **`src/hooks/`**: Hooks personalizados.  
- **`src/interfaces/`**: Contratos de tipagem para componentes e dados complexos no TypeScript.  
- **`src/services/`**: Funções de comunicação com a API.  
- **`src/types/`**: Tipagens simples e utilitárias para TypeScript.  

## Tecnologias Utilizadas  

- **Next.js** – Framework React para aplicações web modernas  
- **Tailwind CSS** – Biblioteca para estilização rápida e eficiente  
- **React Hook Form + Zod** – Gerenciamento de formulários e validação  
- **Atomic Design** – Arquitetura baseada em componentes reutilizáveis  

Para mais detalhes sobre a estrutura e funcionalidades do Next.js, consulte a [documentação oficial](https://nextjs.org/docs).  