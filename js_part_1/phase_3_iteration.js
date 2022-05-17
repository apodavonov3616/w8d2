//sorted is false
//set sorted to true
//iterate through the array, not including last number
//if next number is larger than current number
//switch and sorted = false
//we do all of this until it can iterate and sorted = true 

Array.prototype.bubbleSort = function() {
    isSorted = false
    while (!isSorted) {
        isSorted = true;
        for (i=0; i<(this.length-1); i++) {
            if (this[i] > this[i+1]){
                [this[i], this[i+1]] = [this[i+1], this[i]];
                isSorted = false 
            }
        }
    }

    return this;
};

//iterate once 

String.prototype.substrings = function() {
    let substrings = [];
    for (i=0; i<this.length; i++) {
        for (j=0; j<this.length; j++) {
            if (i<= j) {
                substrings.push(this.slice(i, j))
            }
        }
    };

    return substrings;
}
