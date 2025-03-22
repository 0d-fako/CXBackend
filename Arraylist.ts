
class ArrayList<T> {
    private items: T[];
  
    constructor() {
      this.items = [];
    }
  

    add(item: T): void {
      this.items.push(item);
    }
  

    remove(index: number): void {
      if (index < 0 || index >= this.items.length) {
        throw new Error("Index out of bounds");
      }
      this.items.splice(index, 1);
    }
  
    get(index: number): T {
      if (index < 0 || index >= this.items.length) {
        throw new Error("Index out of bounds");
      }
      return this.items[index];
    }
  
    size(): number {
      return this.items.length;
    }
  

    isEmpty(): boolean {
      return this.items.length === 0;
    }
  
    clear(): void {
      this.items = [];
    }
  }
  


  export default ArrayList;