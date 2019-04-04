const http =require("http");




var criaRouter = function(porta){ 

    var api = {};
    var routes = {};
    var methods = ['GET','POST'];
    var interceptors = [];

    methods.forEach(function(method){
        routes[method] = {};
        api[method.toLowerCase()] =function(path,fn){
            routes[method][path] = fn;
        }
    });
    
    api.iterceptor = function(interceptor){
        interceptors.push(interceptor);
    };

    var executeInterceptors = function(number, req, res){
        var interceptor = interceptors[number];
        if(!interceptor)return;
        interceptor(req, res, function(){
            executeInterceptors(++number, req, res);
        });
    };



    http.createServer(function(require, response){
        executeInterceptors(req, res);
        if (!routes[require.method][require.url]){
            response.statusCode = 404;
            return response.end();
        } 

        routes[require.method][require.url](require, response);
    }).listen(porta);

    return api;
};

module.exports = criaRouter;