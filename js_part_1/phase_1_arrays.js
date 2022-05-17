// unique
Array.prototype.uniq = function() {
    let newArray = []

    for (let i=0; i< this.length; i++){
        if (newArray.indexOf(this[i]) === -1) {
            newArray.push(this[i]);
        }
    }
    return newArray
};

Array.prototype.twoSum = function() {
    const pairs = [];

    for (let i=0; i<this.length; i++){
        for (let j=(i+1); j<this.length; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i,j]);
            }
        }
    }

    return pairs;
}


Array.prototype.transpose = function() {
    let transposed = [];

    // #so we iterate through the Array, and in each miniarray, iterate again
    // #push in the transposed version to miniArraytransposed
    //push  that into transposed
    for (let i=0; i<this.length; i++) {
        for (let j=0; j<this[0].length; j++) {
            
        }
    }
}