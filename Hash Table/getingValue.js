// ==================> file to show how to get a specific value using the key in a hash table <===============

class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.size;
  }
  addValue(key, value) {
    const hash = this.hash(key);
    this.table[hash] = value;
  }
  getValue(key) {
    const hash = this.hash(key);
    return this.table[hash];
  }
  display(){
    for(let i=0;i<this.table.length;i++){
        if(this.table[i]){
            console.log(i, this.table[i]);
        }
    }
  }
}
const hash = new HashTable(10)
hash.addValue("name", "Nischal")
hash.addValue("age", 21)
hash.addValue("height", 165)
hash.addValue("wieght", 40)

console.log(hash.getValue("name"))
hash.display();
