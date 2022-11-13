exports.sum = (a,b) => {
    return a+b;
}

exports.deleteByAwards = (myArray, awards) => {
    return myArray.filter(player => player.awards !== awards)
}

// phil 4 vs 6-7