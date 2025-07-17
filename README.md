# Pokedex

Este projeto é uma **Pokédex** web simples que consome a [PokéAPI](https://pokeapi.co/) para exibir informações de Pokémons em um layout responsivo e interativo.

## Funcionalidades

* Lista inicial de Pokémons carregados via `fetch`.
* Botão **"Load More"** para carregar lotes de Pokémons.
* Badges com cores e nomes dos tipos de cada Pokémon.
* Layout em grade responsiva para diferentes larguras de tela.

## Tecnologias

* **HTML5**
* **CSS3** (Grid, Flexbox)
* **JavaScript (ES6+)**

  * `fetch` API
  * Promises e `async/await`
* **PokéAPI** como fonte de dados

## Estrutura do Projeto

```
├── index.html           # Documento principal
├── assets
│   ├── css
│   │   ├── global.css   # Reset e estilos gerais
│   │   └── pokedex.css  # Estilos específicos da Pokédex
│   └── js
│       ├── main.js      # Lógica de renderização e interação
│       ├── poke-api.js  # Módulo de comunicação com a PokéAPI
│       └── pokemonModel.js # Definição da classe Pokemon e conversores
└── README.md            # Documentação do projeto
```

## Como Executar

1. Clone este repositório:

   ```bash
   git clone https://github.com/luisaleiria/Pokedex.git
   ```
2. Navegue até a pasta do projeto:

   ```bash
   cd Pokedex
   ```
3. Abra o `index.html` em seu navegador (duplo clique ou via servidor local):

   ```bash
   open index.html
   ```

> **Dica:** Para desenvolvimento local, você pode usar um servidor HTTP simples, como:
>
> ```bash
> npx http-server .
> ```

## Melhorias Futuras

* Implementar busca por nome de Pokémon.
* Paginação avançada (próxima/anterior).
* Detalhamento de cada Pokémon (altura, peso, habilidades).
* Modo dark/light.
* Deploy em GitHub Pages ou Netlify.

## Licença

Distribuído sob a licença **MIT**. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---
<div align="center">
  <small>Desenvolvido com 💓 por Luisa Leiria</small>
</div>
