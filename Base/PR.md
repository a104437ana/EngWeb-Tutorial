# Persistência de dados
Eu implementei a persistência de dados no **MongoDB**, armazenando um array de objetos JSON. Cada objeto representa um 

# Setup da base de dados
Primeiro analisei o dataset e percebi que:
1. O ficheiro JSON não tinha um `]` que faltava no final;
2. Os valores do campo `bookId` não se repetiam no dataset inteiro (executei o programa [dataset.py](ex1/dataset.py) para chegar a esta conclusão);
3. Vários campos que representavam listas (personagens, gêneros, entre outros) eram apenas uma string em vez de serem uma lista de strings.

Em segundo lugar, alterei o dataset:
1. Coloquei o `]` em falta no dataset;
2. Decidi que o `bookId` seria o identificador dos livros e por isso, alterei este campo
para `_id`, porque no MongoDB os identificadores teem este nome normalmente;
1. Passei vários campos de strings para listas de strings.

Para cumprir os pontos 2 e 3 executei o programa [dataset.py](ex1/dataset.py):
```
python3 dataset.py
```
Assim, obtive o novo dataset tratado, [dataset_corrigido.json](ex1/dataset_corrigido.json).

Em terceiro lugar, importei o novo dataset numa base de dados em MongoDB como pedia no enunciado:

Iniciar o meu container Docker:
```
sudo docker start a828ec4bc4de
```
Copiar o [dataset_corrigido.json](ex1/dataset_corrigido.json) para o container:
```
sudo docker cp dataset_corrigido.json mongoEW:/tmp
```
Acessar o terminal do container:
```
sudo docker exec -it mongoEW sh
```
Importar o [dataset_corrigido.json](ex1/dataset_corrigido.json) para o MongoDB:
```
mongoimport -d livros -c livros /tmp/dataset_corrigido.json --jsonArray
```
# Respostas textuais pedidas

As queries em MongoDB já se encontram no ficheiro [queries.txt](ex1/queries.txt), mas aqui as temos novamente:

1. Quantos livros têm a palavra 'Love' em qualquer posição no título
```js
db.livros.countDocuments({ title: /Love/i });
```
2. Quais os títulos dos livros, em ordem alfabética, em que um dos autores tem apelido 'Austen'?
```js
db.livros.find({ author: /Austen$/i }, { title: 1, _id: 0 }).sort({ title: 1 });
```
3. Qual a lista de autores (ordenada alfabeticamente e sem repetições)?
```js
db.livros.distinct("author");
```
4. Qual a distribuição de livros por género (quantos livros tem cada género)?
```js
db.livros.aggregate([
    { $unwind: "$genres" },
    { $group: { _id: "$genres", count: { $sum: 1 } } },
    { $sort: { count: -1 } }
]);
```
5. Quais os títulos dos livros e respetivos ISBN, em ordem alfabética de título, em que um dos personagens é 'Sirius Black'?
```js
db.livros.find({ characters: /Sirius Black/i }, { title: 1, isbn: 1, _id: 0 }).sort({ title: 1 });
```
⚠️
No enunciado também pedia para indicar o que usei como identificador dos livros. Para id, eu usei o campo bookId, uma vez o bookId não se repetia em todo o dataset, como já referi anteriormente. Cada livro tinha o seu único bookId então este campo era perfeito para identificador.
# Ações necessárias para quem estiver de fora poder arrancar as aplicações‼️
Clonar o repositório:
- Via SSH:
```
git clone git@github.com:a104437ana/EngWeb2025-Normal.git
```
- Ou, se preferir, via HTTPS:
```
git clone https://github.com/a104437ana/EngWeb2025-Normal.git
```
Depois, entrar no repositório:
```
cd EngWeb2025-Normal
```
Iniciar um container Docker:
```
sudo docker start ???
```
Copiar o [ex1/dataset_corrigido.json](ex1/dataset_corrigido.json) para seu o container:
```
sudo docker cp ex1/dataset_corrigido.json ??:/tmp
```
Acessar o terminal do seu container:
```
sudo docker exec -it ?? sh
```
Importar o [ex1/dataset_corrigido.json](ex1/dataset_corrigido.json) para o MongoDB:
```
mongoimport -d livros -c livros /tmp/dataset_corrigido.json --jsonArray
```
# Instruções de como executar as aplicações desenvolvidas‼️

Depois de clonar o repositório e importar os dados para o MongoDB, vamos executar as aplicações.

Abrir **dois** terminais na pasta `EngWeb2025-Normal`:

### Terminal 1 
(correr API de dados)
```
cd ex1
```
```
cd API_de_dados
```
```
npm i
```
```
npm start
```
Para explorar a API de dados apenas: http://localhost:17000/books
### Terminal 2 
(correr o front-end, que depende da API de dados, logo a API de dados tem de estar a correr)
```
cd ex2
```
```
cd Front-end
```
```
npm i
```
```
npm start
```
Para explorar o Front-end: http://localhost:17001