Documentação do Projeto: Atomic Design no React
Este projeto segue a metodologia Atomic Design para estruturar componentes React de forma modular e escalável.

📂 Estrutura de Pastas
bash
src/
  components/
    atoms/          # Componentes atômicos (elementos básicos)
      header/       # Componentes do cabeçalho
        ButtonAndMenu.jsx
        ContactBar.jsx
        Logo.jsx
        Menu.jsx
      profile/      # Componentes do perfil
        BioImg.jsx
        Greeting.jsx
    
    molecules/      # Combinações de átomos
      home/
        BiographyIntro.jsx  # (Greeting + BioImg)
        Header.jsx          # (Logo + Menu + ContactBar)
    
    organisms/      # Componentes complexos (seções completas)
      home/
        Profile.jsx # (BiographyIntro + outros elementos)
    
  App.jsx           # Página principal (organiza organismos)
🔧 Como Usar
1. Átomos (atoms/)
Definição: Componentes menores e indivisíveis (botões, ícones, inputs).

Exemplo:

jsx
// atoms/header/Logo.jsx
const Logo = () => <img src="/logo.png" alt="Logo" />;
export default Logo;
2. Moléculas (molecules/)
Definição: Combinação de átomos para formar um bloco funcional.

Exemplo:

jsx
// molecules/home/Header.jsx
import Logo from '../../atoms/header/Logo';
import Menu from '../../atoms/header/Menu';

const Header = () => (
  <header>
    <Logo />
    <Menu />
  </header>
);
3. Organismos (organisms/)
Definição: Componentes complexos que integram moléculas/átomos.

Exemplo:

jsx
// organisms/home/Profile.jsx
import BiographyIntro from '../../molecules/home/BiographyIntro';

const Profile = () => (
  <section>
    <BiographyIntro />
    {/* Outros elementos... */}
  </section>
);
4. Página (App.jsx)
Definição: Composição final de organismos.

Exemplo:

jsx
// App.jsx
import Profile from './components/organisms/home/Profile';

const App = () => (
  <div>
    <Profile />
  </div>
);



Aqui está o **README.md** completo, pronto para ser salvo como um arquivo `.md` no seu projeto:

```markdown
# 🚀 Integração com Mock API

Este documento explica como o projeto utiliza um arquivo JSON como mock de API para desenvolvimento frontend.

## 📦 Estrutura do Projeto

```
src/
├── api/
│   └── portfolio.js      # Camada de serviço para requisições
├── atoms/
│   └── Greeting.jsx      # Componente que consome os dados
└── assets/
    └── mockData.json     # Versão local alternativa
```

## 🔧 Configuração

### 1. URL do Mock
O arquivo JSON está hospedado via GitHub RAW:
```javascript
export const API_URL = 'https://raw.githubusercontent.com/TiagoLeopoldo/portfolio-data/main/dynamic.json';
```

### 2. Função de Fetch
```javascript
// api/portfolio.js
export const fetchPortfolioData = async () => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Erro na requisição');
    return await response.json();
  } catch (error) {
    console.error("Falha ao carregar dados:", error);
    throw error;
  }
};
```

## 💡 Como Usar

### Em Componentes
```jsx
import { useState, useEffect } from 'react';
import { fetchPortfolioData } from '../api/portfolio';

function Greeting() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPortfolioData()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div>Carregando...</div>;
  
  return <h1>Olá, {data.name}!</h1>;
}
```

## 🛠️ Boas Práticas

1. **Cache Local**
```javascript
// Adicione em api/portfolio.js
const cache = {
  data: null,
  lastFetch: 0
};

export const getCachedData = async () => {
  if (cache.data && Date.now() - cache.lastFetch < 1000 * 60 * 5) {
    return cache.data;
  }
  const data = await fetchPortfolioData();
  cache.data = data;
  cache.lastFetch = Date.now();
  return data;
};
```

2. **Fallback Local**
```javascript
import localData from '../assets/mockData.json';

// Modifique a função principal
export const fetchPortfolioData = async () => {
  try {
    // Tenta a API primeiro
    const response = await fetch(API_URL);
    return await response.json();
  } catch {
    // Fallback para dados locais
    return localData;
  }
};
```

## 🔄 Atualização do Mock

1. Edite o arquivo `dynamic.json`
2. Envie para o GitHub:
```bash
git add dynamic.json
git commit -m "Atualiza dados do portfólio"
git push origin main
```

## 📌 Observações Importantes

- **Terminologia correta**: "Mock API" (não "mook")
- **Limitações**:
  - Máx. ~60 requisições/hora por IP (GitHub RAW)
  - Dados públicos
- **Para produção**: Substitua por API real

## 📚 Recursos Úteis

- [Documentação GitHub RAW](https://docs.github.com/en/repositories/working-with-files/using-files/viewing-a-file#viewing-raw-files)
- [Mocking Best Practices](https://mswjs.io/docs/)
```

### Como usar:
1. Crie um arquivo chamado `README.md` na raiz do seu projeto
2. Copie todo o conteúdo acima
3. Ajuste as URLs e caminhos conforme sua estrutura

Este arquivo está formatado corretamente em Markdown e inclui:
- Sintaxe de código com highlight
- Estrutura hierárquica
- Seções claras
- Terminologia técnica precisa

Quer que eu adicione mais alguma seção específica? 😊