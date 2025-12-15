# ATF Mobile Teste – URL Shortener

Aplicação mobile desenvolvida em **React Native**, cujo objetivo é encurtar URLs utilizando um serviço backend já existente e exibir um histórico dos links recentemente encurtados.

---

## 📱 Escopo da Aplicação

A aplicação possui **uma única tela**, contendo:

- Campo de texto para inserção da URL
- Botão para envio da URL ao serviço
- Lista com o histórico de URLs encurtadas recentemente

Os dados são mantidos **exclusivamente em memória**, conforme solicitado no desafio.

---

## 🧠 Arquitetura

Foi adotada uma **arquitetura baseada em feature**, visando clareza, coesão e facilidade de manutenção:

src/
└─ features/
└─ shortener/
├─ components/ # Componentes de UI
├─ hooks/ # Lógica e gerenciamento de estado
├─ services/ # Comunicação com a API
├─ styles.ts # Styled-components (React Native)
├─ types.ts # Tipagens
└─ ShortenerScreen.tsx

### Principais decisões arquiteturais

- Separação clara de responsabilidades
- Lógica de negócio isolada em hooks
- Comunicação com API desacoplada da UI
- Estado mantido apenas em memória
- Styled-components para estilização mobile nativa

---

## 🔌 Integração com a API

Endpoint utilizado:

POST https://url-shortener-server.onrender.com/api/alias

Corpo da requisição:

```json
{
  "url": "https://example.com"
}

Resposta de sucesso:
{
  "alias": "abc123",
  "_links": {
    "self": "https://example.com",
    "short": "https://short.url/abc123"
  }
}

🧩 Gerenciamento de Estado

Gerenciamento local utilizando React Hooks
Nenhuma persistência em banco de dados ou armazenamento local
O histórico é reiniciado ao fechar o aplicativo

🎨 Estilização

Utilizado styled-components (React Native)
Abordagem mobile-first

Sem dependência de CSS ou soluções voltadas para web

▶️ Como Executar o Projeto
Pré-requisitos
Node.js (LTS)
Expo CLI

Aplicativo Expo Go instalado no dispositivo móvel

Passos para execução
npm install
npx expo start --tunnel

No dispositivo móvel:
Abra o aplicativo Expo Go
Escaneie o QR Code exibido no terminal ou navegador

ℹ️ Para dispositivos iOS físicos, recomenda-se o uso do modo Tunnel para evitar restrições de rede local.

🧪 Testes

O projeto foi estruturado visando fácil testabilidade, permitindo:
Testes unitários da lógica de negócio (hooks)
Testes da camada de serviços (API)
Testes de interface (UI)

📌 Observações Finais

A interface visual não foi priorizada, conforme indicado no desafio
O foco do projeto está na organização do código, arquitetura e boas práticas de desenvolvimento mobile

🚀 Tecnologias Utilizadas

React Native
Expo
TypeScript
Axios
Styled-components
```
