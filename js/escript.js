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

   
    $scope.adicionar = function(contato){
        // Adicionando ao array a cópia de contato
        $scope.contatos.push(angular.copy(contato));
        // Apaga o contato
        delete $scope.contato;
    };

    //Aray de operadoras
    $scope.operadoras = [
        {nome: "Oi", codigo: 14},
        {nome: "Vivo", codigo: 15},
        {nome: "Tim", codigo: 41}
    ];

    $scope.apagar = function(contatos){
        $scope.contatos = contatos.filter(function(contato){
            if (!contato.selecionado)return contato;
        });
    };

    $scope.isContato = function(contatos){
        return contatos.some(function(contato){
            return contato.selecionado;
        }); 
        
    }
});