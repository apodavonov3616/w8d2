const NUMS = [1,2,3,4,5];

Array.prototype.myEach = function(callback) {
    for (i=0; i<this.length; i++ ) {
        callback(this[i])
    };
};

Array.prototype.myMap = function(callback) {
    let mapped = []

    this.myEach(element => mapped.push(callback(element)));

    return mapped
}

Array.prototype.myReduce = function(callback, initialValue) {
    let arr = this;
    
    if (initialValue === undefined) {
        initialValue = arr[0];
        arr = arr.slice(1);
    }

    let result = initialValue

    arr.myEach(el => result = callback(result, el));

    return result;

}