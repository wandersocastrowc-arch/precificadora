# Precificadora · iFood & Marketplaces — FinLab.

Ferramenta web (um único arquivo, sem servidor) para precificar produtos em delivery e marketplaces pela **margem de contribuição** — e entender por que **ratear o custo fixo no preço distorce**.

Feita por **Wanderson de Castro** · Economista · Perito · Consultor · [Portfólio](https://wandersocastrowc-arch.github.io/Portifolio)

---

## O que ela faz

Quatro passos, na ordem:

1. **Ficha Técnica** — monta o custo *variável* de uma unidade (insumos + embalagem + descartáveis).
2. **Preço por Canal** — preço sugerido e contribuição de cada canal (Balcão, WhatsApp, iFood Básico/Entrega, Mercado Livre, Shopee).
3. **Ponto de Equilíbrio** — onde o custo fixo realmente entra: como meta mensal de pedidos, não como rateio por produto.
4. **Rateio x Contribuição** — demonstração com gráfico de por que o método do rateio infla o preço quando o volume cai.

**Lógica de preço:** `preço sugerido = custo variável ÷ (1 − comissão − taxa de pagamento − imposto do erro − tributo − margem alvo)`.
O custo fixo **não** entra no preço; ele é coberto pela soma das contribuições (ponto de equilíbrio).

## Características

- **100% offline** — um arquivo `index.html`, sem servidor, sem build, sem dependências externas (CDN-free).
- **Salva no navegador** (localStorage) — seus dados ficam no seu computador, nada é enviado para lugar nenhum.
- **Exportar / Importar** os dados em JSON e **Imprimir/PDF**.
- **Responsivo** (funciona no celular) e pronto para projetar ao vivo.

## Como usar localmente

Basta abrir o arquivo `index.html` com qualquer navegador (duplo clique). Pronto.

## Como publicar no GitHub Pages

1. Crie um repositório no GitHub (ex.: `precificadora`).
2. Suba o `index.html` (e este `README.md`) para o repositório:
   - pelo site: **Add file → Upload files** → arraste os arquivos → **Commit**.
   - ou via git:
     ```bash
     git init
     git add index.html README.md
     git commit -m "Precificadora FinLab"
     git branch -M main
     git remote add origin https://github.com/SEU-USUARIO/precificadora.git
     git push -u origin main
     ```
3. No repositório, vá em **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Em **Branch**, selecione **main** e a pasta **/ (root)** → **Save**.
6. Aguarde ~1 minuto. A ferramenta ficará no ar em:
   `https://SEU-USUARIO.github.io/precificadora/`

> Dica: para ela aparecer dentro do seu portfólio, você pode subir o `index.html` numa subpasta do repositório do portfólio (ex.: `/precificadora/index.html`) e linkar para `…github.io/Portifolio/precificadora/`.

## Aviso

As taxas pré-preenchidas (iFood, Mercado Livre, Shopee) são **referências de 2026** e variam por categoria, região e plano. Confirme sempre no painel de cada plataforma. A ferramenta é um apoio de decisão, não substitui contabilidade.

---

© FinLab. — uso livre para fins educacionais e comerciais próprios.
