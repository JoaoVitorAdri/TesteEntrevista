function alternate(s) {
 
    if(s.length === 1){
        return 0
    }
 
 
    let caractereUnico = [...new Set(Array.from(s))];
 
    let auxArr = Array.from(s);
   
    let maior = 0;
   
    for(var i = 0; i< caractereUnico.length; i++){
 
        let elemento1 = caractereUnico[i];
  
        for(var j = 0; j < caractereUnico.length; j++){
 
            let elemento2 = caractereUnico[j];
         
            let temp = auxArr.filter(filtradoElem=> {
                return filtradoElem === elemento1 || filtradoElem === elemento2
            }).join('');
 
            if(temp.indexOf(elemento1+elemento1) === -1 && temp.indexOf(elemento2+elemento2) === -1){
              
                if(maior < temp.length){
                    maior = temp.length;
                }
 
            }
        }
    }
    return maior;
}
 
