import json
import ast
import csv

json1 = '''
with open('dataset.json','r',encoding='utf-8') as file:
    data = json.load(file)

dic = {}

for unit in data:
    unit['_id'] = unit.pop('bookId')
    if unit['_id'] in dic.keys():
        print("repetidos!")
    else:
        dic[unit['_id']] = unit['_id']
    #string "[a,b]" to lista [a,b]
    unit['genres'] = ast.literal_eval(unit['genres'])
    unit['characters'] = ast.literal_eval(unit['characters'])
    unit['awards'] = ast.literal_eval(unit['awards'])
    unit['setting'] = ast.literal_eval(unit['setting'])
    # string a,b,c to lista [a,b,c]
    unit['author'] = unit['author'].split(', ')
'''
csv1 = '''
with open('dataset.csv', encoding="utf-8") as file:
    reader = csv.DictReader(file, delimiter=";")
    alunos = list(reader)

data = {"alunos": alunos}
'''

csv2 = '''
data = []

with open('dataset.csv', encoding="utf-8") as file:
    reader = csv.DictReader(file, delimiter=";", quotechar='"')
    
    for row in reader:
        row["_id"] = row.pop("idcontrato")
        row["precoContratual"] = float(row["precoContratual"].replace(",", "."))
        row["prazoExecucao"] = int(row["prazoExecucao"])
        data.append(row)
'''


with open("dataset_corrigido.json",'w',encoding='utf-8') as file:
    json.dump(data, file, indent=4, ensure_ascii=False)