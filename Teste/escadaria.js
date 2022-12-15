function escadaria(n){
    for(let i = n; i-- > 0;){
        let s = '';
        for (let j = 0; j < n; ++j){
            if (j>=i){
                s += '#';
            }else{
                s += ' ';
            }
        }
        console.log(s);
    }
}
