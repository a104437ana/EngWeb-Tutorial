# Tutorial: Como Passar no Teste de EngWeb ✅
## ⭐ Introdução
Olá, eu fiz a cadeira de Engenharia Web (EngWeb) no ano de 2025 e este tutorial foi fundamental para eu conseguir passar no teste.

No teste de 2025 tive **18.2** de 20 (não cheguei aos 20 porque a última pergunta correu mal e depois o tempo acabou 🥲). Podes ver a minha resolução do teste [aqui](https://github.com/a104437ana/ENGWEB2025-Normal).

Seja como for, acertei tudo menos a última questão, usando **este tutorial** que agora torno público.

Fico super feliz se isto ajudar alguém no futuro ❤️

Se isto te ajudar, uma estrela neste [repositório](https://github.com/a104437ana/EngWeb-Tutorial) era muito bem-vinda ⭐

## 📋 Tutorial

Este tutorial utiliza scripts para automatizar várias tarefas que terias de realizar manualmente durante o teste, poupando-te tempo.

Já não terás de fazer `npm install`, nem de criar pastas e ficheiros novos, eliminar ficheiros desnecessários, instalar dependências, colocar o ficheiro w3.css no repositório, criar um .gitignore e um PR.md, ... isso será tudo feito pelos scripts.

Assim irás poupar bastante tempo do teste ⏳

```
📁 EngWeb-Tutorial
├── 📁 Base              # Ficheiros usados nos scripts
├── 📁 Exemplos          # Ficheiros de exemplo para ajudar no teste
├── 📄 README.md
├── 💲 script.sh         # Script 1
└── 💲 script2.sh        # Script 2
```

Segue atentamente os passos descritos abaixo, lembrando que este tutorial será aplicável apenas se o formato dos testes se mantiver o mesmo que em 2025.

Conforme avanças no tutorial, certifica-te de testar se as coisas funcionam.

## ☂️ Antes do teste

### ✅ Clonar este repositório [EngWeb-Tutorial](/)
```
git clone git@github.com:a104437ana/EngWeb-Tutorial.git
```
### ✅ Alterar o ficheiro [Base/layout.pug](Base/layout.pug)
Nas linhas 20, 21 e 22 altera o ano, coloca o teu github, o teu nome e número corretos:

```
20          span  do ano 2025 por   
21          a(href="https://github.com/a104437ana") Ana Sá Oliveira
22          span  (A104437)
```

### ✅ Alterar o ficheiro [script2.sh](script2.sh)
Nas linhas 3, 4 e 5 altera consoante o teu docker:

```
3          sudo docker start a828ec4bc4de
4          sudo docker cp dataset_corrigido.json mongoEW:/tmp
5          sudo docker exec -it mongoEW sh
```
### ✅ Alterar o ficheiro [Base/ex1/app.js](Base/ex1/app.js)
Na linha 8 altera a **porta 27017** para a porta do teu MongoDB:

```
8          var mongoDB = 'mongodb://127.0.0.1:27017/bla';
```

## ☔ Durante o teste

### ✅ Ler todo o enunciado
### ✅ Criar o teu repositório para o teste

### ✅ Entrar neste repositório [EngWeb-Tutorial](/)
```
cd EngWeb-Tutorial
```
### ✅ Executar o [script.sh](script.sh) dando o caminho para o teu repositório:
```
bash script.sh path_do_teu_repositorio
```
### ✅ Colocar o dataset dado na pasta ex1 do teu repositório
### ✅ Corrigir dataset dado na pasta ex1 do teu repositório se necessário
### ✅ Adaptar o ex1/dataset.py do teu repositório
### ✅ Executar o ex1/dataset.py do teu repositório: 
```
cd path_do_teu_repositorio
cd ex1
python3 dataset.py
```
### ✅ Entrar neste repositório [EngWeb-Tutorial](/)
```
cd EngWeb-Tutorial
```
### ✅ Executar o [script2.sh](script2.sh) dando o caminho para a pasta ex1 do teu repositório:
```
bash script2.sh path_do_teu_repositorio/ex1
```
### ⚠️ Depois faz isto substituindo:
- **bla** pelo nome da **database** do enunciado;
- **blas** pelo nome da **collection** do enunciado.
```
mongoimport -d bla -c blas --drop /tmp/dataset_corrigido.json --jsonArray
```
```
mongosh
```
```
use bla
```
```
db.blas.countDocuments()
```
```
db.blas.findOne()
```
```
exit
```
```
exit
```
### ✅ Alterar o ficheiro ex1/queries.txt do teu repositório (ChatGPT)

### ✅ Alterar o ficheiro ex1/API_de_Dados/bin/www do teu repositório
Na linha 15 substitui a porta que tem lá pela porta indicada no enunciado:

```
15         var port = normalizePort(process.env.PORT || '25000');
```
### ✅ Alterar o ficheiro ex1/API_de_Dados/app.js do teu repositório
Na linha 8 substitui **bla** pelo nome da **database** do enunciado:

```
8          var mongoDB = 'mongodb://127.0.0.1:27017/bla';
```
### ✅ Alterar o ficheiro ex1/API_de_Dados/models/bla.js do teu repositório
### ✅ Alterar o ficheiro ex1/API_de_Dados/controllers/blas.js do teu repositório
### ✅ Alterar o ficheiro ex1/API_de_Dados/routes/blas.js do teu repositório
Dica: Olhar o ficheiro [Exemplos/ex1/x.js](Exemplos/ex1/x.js).
### ✅ Alterar o ficheiro ex2/Front-end/bin/www do teu repositório
Na linha 15 substitui a porta que tem lá pela porta indicada no enunciado:

```
15         var port = normalizePort(process.env.PORT || '25000');
```
### ✅ Alterar o ficheiro ex2/Front-end/routes/index.js e adicionar/alterar ficheiros da pasta ex2/Front-end/view do teu repositório
Dica: Olhar o ficheiro [Exemplos/ex2/x.js](Exemplos/ex2/x.js).
### ✅ Alterar quase na totalidade o ficheiro PR.md do teu repositório
### ✅ Testar tudo again
### ✅ Adicionar o teste ao teu repositório
```
cd path_do_teu_repositorio
```
```
git add .
```
```
git commit -m "Adicionado teste"
```
```
git push
```
## 🌂 Depois do teste

### ✅ Deixar uma estrela neste [repositório](https://github.com/a104437ana/EngWeb-Tutorial) ⭐☺️👉👈
### ✅ Seguir-[me](https://github.com/a104437ana) no Github 🌷❤️
### ✅ Esperar pela nota com confiança e tranquilidade 😎🍀
