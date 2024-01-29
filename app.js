// Ajax, callback

class Request{
    constructor(){
        this.xhr = new XMLHttpRequest();
    }
    //Get Request 
    get(url,callback){
        this.xhr.open("GET",url);
 
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,this.xhr.responseText);
            }
            else{
                callback("GET: Hata",null);
            }
        }
        this.xhr.send();
    }
    //Post Request
    post(url,data,callback){
        this.xhr.open("POST",url);

        this.xhr.setRequestHeader("Content-type","application/json");
        
        this.xhr.onload = () => {
            if(this.xhr.status === 201) {
                callback(null,this.xhr.response);
            }else{
                callback("POST: HATA",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    //Put Request
    put(url,data,callback){
        this.xhr.open("PUT",url);

        this.xhr.setRequestHeader("Content-type","application/json");
        
        this.xhr.onload = () => {
            if(this.xhr.status === 200) {
                callback(null,this.xhr.response);
            }else{
                callback("PUT: HATA",null);
            }
        }
        this.xhr.send(JSON.stringify(data));
    }
    //Delete Request
    //Get Request 
    delete(url,callback){
        this.xhr.open("DELETE",url);
 
        this.xhr.onload = () => {
            if(this.xhr.status === 200){
                callback(null,"Veri Silme İşlemi Başarılı");
            }
            else{
                callback("DELETE: Hata",null);
            }
        }
        this.xhr.send();
    }
}

const request = new Request();

request.get("https://jsonplaceholder.typicode.com/albums",function (err,response){
    if(err === null){
        console.log((response));
    }
    else{
        console.log(err);
    }
});

request.post("https://jsonplaceholder.typicode.com/albums",{userId:2,title:"Merhaba"},function(err,albums){
    if(err === null){
        console.log((albums));
    }
    else{
        console.log(err);
    }
});

request.put("https://jsonplaceholder.typicode.com/albums/10",{userId:143,title:"Merhaba"},function(err,album){
    if(err === null){
        console.log((album));
    }
    else{
        console.log(err);
    }
});


request.delete("https://jsonplaceholder.typicode.com/albums/10",function (err,response){
    if(err === null){
        console.log((response));
    }
    else{
        console.log(err);
    }
});