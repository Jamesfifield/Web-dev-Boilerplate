 module.exports = function(){
     var client = './src/';
     var clientApp = client + 'js/app/';
     
     var config = {
                   
        index : client + 'index.html',
        appjs : [
             clientApp + '**/*.module.js',
             clientApp + '**/*.js',
            clientApp + '*.js',
             "!"+clientApp + '**/*.spec.js' 
        ],
               
             
        client:client,
         
        
        alljs: [
        './src/js/app/**/*.js',
        './src/js/app/*.js'
        ],
        
        temp: './tmp',
        
        lessFiles: [
            
            './src/js/lib/bootstrap/less/*.less'
        ],
        
        bootstrapLess: [
            
            './src/js/lib/bootstrap/less/bootstrap.less'
        ],
         
         bower : {
              json : require('./bower.json'),
              directory: './src/js/lib',
              ignorePath: '../..'
          }
    };
     
      config.getWiredepDefaultOptions = function(){
          var options ={
              bowerJson:  config.bower.json,
              directory : config.bower.directory,
              ignorePath: config.bower.ignorePath
          };
          
          return options;
         };

  
     
    
    return config;
    
};