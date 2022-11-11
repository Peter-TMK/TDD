exports.sum = (a,b) => {
    return a+b;
}

exports.deleteByAwards = (myArray, awards) => {
    return myArray.filter(player => player.awards !== awards)
}