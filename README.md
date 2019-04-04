Sumário:

[TOC]

# Angular js - Estudando o básico

## Pré-codificação
### Inicializando
Primeiramente inicializamos o repositório git:
```bash
git init
```

Após, Crie o arquivo **.gitignore** e coloque o conteúdo:
```.gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Directory for instrumented libs generated by jscoverage/JSCover
lib-cov

# Coverage directory used by tools like istanbul
coverage

# nyc test coverage
.nyc_output

# Grunt intermediate storage (http://gruntjs.com/creating-plugins#storing-task-files)
.grunt

# Bower dependency directory (https://bower.io/)
bower_components

# node-waf configuration
.lock-wscript

# Compiled binary addons (https://nodejs.org/api/addons.html)
build/Release

# Dependency directories
node_modules/
jspm_packages/

# TypeScript v1 declaration files
typings/

# Optional npm cache directory
.npm

# Optional eslint cache
.eslintcache

# Optional REPL history
.node_repl_history

# Output of 'npm pack'
*.tgz

# Yarn Integrity file
.yarn-integrity

# dotenv environment variables file
.env

# next.js build output
.next
```

Após inicializamos o repositório para o node:
```bash
npm init
```

**Será pedido:**

1. Nome do pacote, podemos defini-lo como: *estudando-angular*
2. Após a versão (que manteremos 1.0.0).
3. Colocaremos como descrição: *Estudando Angular.js*
4. Manteremos o *index.js* como código de inicio.
5. O teste de comando por padrão vazio (apenas de um `enter`).
6. Adicionamos o repositório git
7. As keywords colocamos como: *Angular, Node, Web*
8. Colocamos nossos nomes como autores
9. Liscença manteremos *ISC*.
10. De um ok (um `enter`) para concluir.


### Instalando o necessário
Para instalarmos uma versão do Angular.js, rode o seguinte comando:

```node
npm install angular --save
```

Vamos instalar o jquery:

```node
npm install jquery --save
```

Vamos instalar o popper.js:

```node
npm install popper.js --save
````

Vamos instalar o bootstrap:

```node
npm install bootstrap --save
```

---

## Criando os códigos e pastas

- Para salvar os estilos: **css**
- Para salvar os escripts: **js**
- Crie o **estilo.css** dentro de **css**
- Crie o **escript.js** dentro de **js**
- Crie na pasta anterior a **css** e **js**, um **index.html**.

## Fazendo o hello World!
Adicione o seguinte código ao **index.html**:

```html
<!DOCTYPE html>
<html lang="pt-br" ng-app="estudandoAngular">
    <head>
        <meta charset="utf-8"/>
        <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css"/>
        <link rel="stylesheet" href="css/estilo.css"/>

        <script src="node_modules/jquery/dist/jquery.min.js"></script>
        <script src="node_modules/angular/angular.min.js"></script>
        <script src="js/escript.js"></script>

        <title>Hello, Cruel World!</title>
    </head>
    <body ng-controller="estudandoAngularCtrl">
            <header class="container-fluid jumbotron">
                <h1 class="text-center">
                    {{titulo}}
                </h1>
            </header>

            <section class="container-fluid">
                <h2 ng-bind="subtitulo" class="text-center">                   
                </h2>
            </section>

    </body>
</html>
```

Adicione o código ao **escript.js**:

```javascript
angular.module("estudandoAngular", []);
angular.module("estudandoAngular").controller("estudandoAngularCtrl", function($scope){
    $scope.titulo = "Hello, Cruel World!";
    $scope.subtitulo = "Lista Telefonica";

     // Criando um array
    $scope.contatos  = [
        { nome: "Gustavo",  telefone: "985309446" },
        { nome: "Moisés",   telefone: "989456123" },
        { nome: "Sônia",    telefone: "985448567" },
        { nome: "José",     telefone: "934343416" },
        { nome: "Pedro",    telefone: "991114534" }
    ];
});
```

## Módulos
`angular.module` cria um módulo, e o `[]`, que está vazio deixa vazio com o módulo. 

## Diretivas
São extesões para o html, declaradas nas tags:

- ng-app:
Define onde serão as fronteiras da aplicação.

- ng-controller:
Vincula a **view** (a parte que é vizualizada ) ao **controller** (que controla como a a plicação funciona).

A variável que vai dentro da função, chamada `$scope` é quem faz o intermédio entre a **view** e o **controller**.

- ng-bind:
Subistitui o elemento, for uma expressão.

Por exemplo o subtitulo que está dentro de controller:

```javascript
$scope.subtitulo = "Lista Telefonica";
```

Será colocado no lugar do subititulo:
```html
<h2 ng-bind="subtitulo" class="text-center">
</h2>
```

A interpolação funciona da mesma maneira que o ng-bind. Como no exemplo:

```html
<h1 class="text-center">
    {{titulo}}
</h1>
```

- ng-repeat
Iterando objetos e arrays.

Cria-se um array:
```javascript
    // Criando um array
    $scope.contatos  = [
        { nome: "Gustavo",  telefone: "985309446" },
        { nome: "Moisés",   telefone: "989456123" },
        { nome: "Sônia",    telefone: "985448567" },
        { nome: "José",     telefone: "934343416" },
        { nome: "Pedro",    telefone: "991114534" }
    ];
```

Itera os dados em uma tabela:
```html
<table class="table table-striped">
    <thead>
        <tr>
            <th>Nome</th>
            <th>Telefone</th>
        </tr>
    </thead>
    <tbody>
        <tr ng-repeat="contato in contatos">
            <td>{{contato.nome}}</td>
            <td>{{contato.telefone}}</td>
        </tr>
    </tbody>
</table>
```

- ng-model:
Faz o inverso do ng-bind, enviando da view para o controller:

```html
<input class="form-control" type="text" placeholder="Seu nome" ng-model="contato.nome"/>
<input class="form-control" type="text" placeholder="Número de telefone" ng-model="contato.telefone"/>
```

- ng-click:

Da a funcionalidade de clique ao botão, executando o comportamento em um elemento.

```html
<input class="btn btn-success btn-block" type="submit" value="Salvar" ng-click="adicionar(contato)"/>
```

```javascript
 $scope.adicionar = function(contato){
    // Adicionando ao array a cópia de contato
    $scope.contatos.push(angular.copy(contato));
    // Apaga o contato
    delete $scope.contato;
};
```

- ng-disabled:

Desabilita um botão, ou qualque tag.

```html
<input class="btn btn-success btn-block" type="submit" value="Salvar" ng-click="adicionar(contato)" ng-disabled="!contato.nome || !contato.telefone"/>
```

- ng-option:

Cria um select fácil, como um select de operadoras por exemplo:

```javascript
//Aray de operadoras
$scope.opreadoras = [
    {nome: "Oi", codigo: 14},
    {nome: "Vivo", codigo: 15},
    {nome: "Tim", codigo: 41}
];
```

```html
<select class="form-control" ng-model="contato.operadora" ng-options="operadora.nome for operadora in operadoras"> 
    <option value="">Selecione sua operadora</option>    
</select>
```