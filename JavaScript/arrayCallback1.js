function cleanNames(names){
    const newNames = names.map(function(n){
        return n.trim();
    });
    return newNames;
}
