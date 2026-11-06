# ENEM Lab

Espaço de estudo para o ENEM: temas com resumo, pegadinhas e dicas; quiz por tema, por disciplina ou misturado; flashcards com revisão espaçada; jogo da memória; ligação de conceitos; caderno de erros. Funciona como app no celular (PWA) e guarda o progresso no próprio aparelho.

## Publicar no GitHub Pages
1. Crie um repositório novo (ex.: `enem-lab`), público.
2. Envie **todas** as pastas e arquivos deste projeto (`index.html`, `sw.js`, `manifest.json`, `css/`, `js/`, `data/`, `icons/`).
3. Em **Settings → Pages**, escolha *Deploy from a branch*, branch `main`, pasta `/ (root)`, e salve.
4. Abra o endereço `https://SEU-USUARIO.github.io/enem-lab/`. No celular: menu do navegador → *Adicionar à tela inicial*.

Ao atualizar o conteúdo, aumente o número em `CACHE = 'enemlab-v1'` no `sw.js` (v2, v3…) para o celular baixar a versão nova.

## Como alimentar uma disciplina
Edite só o arquivo `data/d-<disciplina>.js`. Cada tema segue o modelo de `data/d-matematica.js`:

- `id` (a-z, 0-9, hífen), `nome`, `incidencia` (`alta` | `media` | `baixa`), `resumo`
- `conceitos`: `[{ titulo, texto }]` (use `**negrito**` e `*itálico*`; parágrafos separados por linha em branco; linhas com `- ` viram lista)
- `pegadinhas`, `dicas`: listas de frases
- `exemplo`: `{ enunciado, resolucao }`
- `flashcards`: `[{ f, v }]` (frente e verso)
- `quiz`: `[{ q, alt: [5 alternativas], c: índice da certa (0-4), exp, res (opcional), dif: 'facil'|'medio'|'dificil' }]`
  - `res` (opcional): resolução passo a passo, mostrada recolhida após o gabarito; é uma lista de passos (cada passo vira um item) e o validador avisa quando falta em Matemática, Física e Química
  - as alternativas são embaralhadas; a explicação **não** pode citar letras (use `fixa: true` se houver "todas as anteriores")
- `pares`: `[{ a: termo, b: definição curta }]` (usados na memória e na ligação)
- `fontes`: `[{ titulo, url }]`

Depois de editar, confira com `node tools/validate.js` (erros em ✖, recomendações em !).

## Observações
- O progresso é salvo por texto da questão/cartão: reordenar ou corrigir outros itens não apaga o histórico.
- Backup: *Progresso → Exportar* gera um arquivo `.json`; *Importar* restaura.
