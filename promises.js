
let promise = new Promise(function(resolve, reject) {
     x="This is the new session";
     y="This is the new session";
    if(x==y){
        resolve();
    }
    else{
        reject();
    }
});

promise.then(function(){
    document.write("success");
}).
catch(function(){
  document.write("some errors has occured");
});