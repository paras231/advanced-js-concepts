/**
 * implement Hash Map data structure
 * Data is stored in key value pairs
 * real world applications of hash maps
 * Each key in the map must be unique.
 * 1. caching
 * 2. Database indexing  example -> redis uses maps
 * 3.
 */

/**
 * implement Hash Map data structure with class
 */

export default class HashMap {
  constructor(size = 100) {
    // Initialize the hash table with empty buckets
    this.size = size;
    this.table = new Array(size).fill(null).map(() => []);
  }
  hashFunction(key) {
    // Simple hash function to compute an index
    let hash = 0;
    for (let char of key) {
      hash = (hash + char.charCodeAt(0)) % this.size;
    }
    return hash;
  }
  /**
   * insert key value to hash map
   */
  insert(key, value) {
    // get index of the key
    const index = this.hashFunction(key);
    //    check if value already exists in the hash table
    for (let pair of this.table[index]) {
      if (pair[0] == key) {
        //     update the value if exists
        pair[1] = value;
        return;
      }
    }
    this.table[index].push([key, value]);
  }
  /**
   * get a the value by key
   * */
  get(key) {
    const index = this.hashFunction(key);
    for (const pair of this.table[index]) {
      if (pair[0] == key) {
        return pair[1];
      }
    }
    // Return null if key is not found
    return null;
  }
  /**
   * delete a value by key
   */
  delete(key) {
    const index = this.hashFunction(key);
    //  loop through entire hash map
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i][0] == key) {
        this.table[index].splice(i, 1);
        return true;
      }
    }
    //  return false if key not found
    return false;
  }
  // display entire table
  display() {
    return this.table.flat(2);
  }
}


/**
 * example implementations and some problems based on hash maps
 */

//  problem  1.

export function findFrequencyOfchar(str){
    // traverse through the string
    // check if string exists in map else insert this
    const map =  new HashMap();
    
    for (let index = 0; index < str.length; index++) {
        if(map.get(str.substr(index))){

        }
    }
}