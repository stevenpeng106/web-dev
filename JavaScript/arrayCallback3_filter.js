function validUserNames(names) {
    const validNames = names.filter(name => {
        return name.length < 10;
        });
    return validNames;
}
