function dublictString(string){
    string = string.split(" ");
    let str={};

for(var i =0; i < string.length; i++){
    
    if(string[i].includes(',')){
         
        str[string[i].split(',')[0].toLowerCase()]='true'; 
          if(str[string[i]]){
        return string[i]; 
      }  
    }
    else{
      if(str[string[i].toLowerCase()]){
        return string[i];
      }  
       str[string[i].toLowerCase()] = 'true'
       
    }   
}
}