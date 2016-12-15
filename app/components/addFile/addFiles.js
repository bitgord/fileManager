angular.module('app.addFiles', ['ui.router'])
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', function($stateProvider, $urlRouterProvider, $httpProvider) {
        $stateProvider.state('addFiles', {
            url: '/addfiles',
            templateUrl: 'components/addFile/addFiles.html',
            controller: 'FileController'
        });
        $urlRouterProvider.otherwise('/index');
    }])
    .controller('FileController', ['$scope', '$http', function($scope, $http) {
        

        console.log('Im in the file controller');

        function fileReader(file) {
  
            var reader = new FileReader();
            reader.onload = function(event) {
                console.log(reader.result);
            };

            reader.readAsText(file);
        }

        var dropFile = document.getElementById('drop_files');

        dropFile.addEventListener('drop', function(event){
            var = fileToUpload - [];
            event.preventDefault();
            var droppedFiles = event.dataTransfer;

            // check to see the type of fileLength exists because of the browser and append length.
            var fileLength = droppedFiles.items ? droppedFiles.items.length : droppedFiles.files.length;
            if(droppedFiles.items){
                fileLength--;
                for(var i =0; i< droppedFiles.items.length; i++){
                    fileReader(droppedFiles.items[i].getAsFile());
                    fileToUpload.push(droppedFiles.items[i));
                    console.log('dropped item', droppedFiles.items[i].getAsFile());
                    
                    var http = new XMLHttpRequest();
                     var params = fileToUpload;
                     http.open("POST", '/api/files', true);  //Send the proper header information along with the 
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                      http.onreadystatechange = function() {

                    //Call a function when the state changes.    
                    if(http.readyState == 4 && http.status == 200) {    
                        alert(http.responseText);   
                    } } 
                    http.send(params);
                }
                
            }else{
                for(var i =0; i< droppedFiles.files.length; i++){
                    fileLength--;
                    fileReader(droppedFiles.files[i]);
                    fileToUpload.push(droppedFiles.files[i));
                        console.log('dropped file', droppedFiles.files[i]);


                    var http = new XMLHttpRequest();
                     var params = fileToUpload;
                     http.open("POST", '/api/files', true);  //Send the proper header information along with the 
                    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                      http.onreadystatechange = function() {

                    //Call a function when the state changes.    
                    if(http.readyState == 4 && http.status == 200) {    
                        alert(http.responseText);   
                    } } 
                    http.send(params);
                
                }
            }
        }, false);

        dropFile.addEventListener('dragenter', function(event){
            event.preventDefault();
            dropFile.style.border = "5px dotted black"

        }, false);

        dropFile.addEventListener('dragover', function(event){
            event.preventDefault();

        }, false);

        dropFile.addEventListener('dragend', function(event){

        }, false);


      
    }]);

