

var exec = require('child_process').execFile;

var fun =function(){
    exec('./a', function(err, data) {  
        console.log(err)
        console.log(data.toString());                       
    });  
}
fun();

/* GET users listing. */
function sendMessage(message) {
    var fun =function(){
        exec('./a.exe', function(err, data) {  
            console.log(err)
            console.log(data.toString());                       
        });  
    }   
    fun();

};

var name_array = [1,2,3];
sendMessage(name_array);

function getActive() {
    var http = require("http");
    url = "http://192.168.105.1:3000/actives/getActive/57885b4b5e46a3401d706435";
    var request = http.get(url, function (response) {  
        var buffer = "", 
        data,
        route;

        response.on("data", function (chunk) {
            buffer += chunk;
        }); 

        response.on("end", function (err) {
            console.log(buffer);
            console.log("\n");
            data = JSON.parse(buffer);
        }); 
    }); 
}

var i = 0, howManyTimes = 10;
function f() {
    getActive();
    i++;
    if( i < howManyTimes ){
        setTimeout( f, 3000 );
    }
}
f();