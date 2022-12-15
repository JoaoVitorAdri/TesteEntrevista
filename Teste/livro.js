function livro(n, p){

    if(n % 2 == 0){
        ++n;
        var d = n - p;
    }else{
        d = n - p;
    }
    if(d>(n/2)){
        return Math.floor(p/2)
    }else{
        return Math.floor(d/2)
    }

}
