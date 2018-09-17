class Sorter {
  constructor() {
    // your implementation
    this.arr = [];
    this.func = function compareNumeric (a, b) {
      return a - b;
    }
  }

  add(element) {
    // your implementation
    this.arr.push(element);
  }

  at(index) {
    // your implementation
    return this.arr[index];
  }

  get length() {
    // your implementation
    return this.arr.length;
  }

  toArray() {
    // your implementation
    return this.arr;
  }

  sort(indices) {
    // your implementation
   let arrSort = [];
    for (let i=0; i<indices.length; i++) {
      arrSort.push(this.arr[indices[i]]);      
    }
    arrSort.sort(this.func);
    indices.sort(function compareNumeric(a, b) {
      return a - b;
    });
    for(let i=0; i<arrSort.length; i++) {
      this.arr.splice(indices[i], 1, arrSort[i]);
    }

  }

  setComparator(compareFunction) {
    // your implementation
    this.func = compareFunction;
  }
}

module.exports = Sorter;