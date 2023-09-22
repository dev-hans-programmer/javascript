class LRUCache {
   constructor(capacity) {
      // Initialize the capacity and create an empty Doubly Linked List
      this.capacity = capacity;
      this.size = 0;
      this.head = { key: null, value: null, prev: null, next: null };
      this.tail = this.head;
      this.cache = new Map(); // Use a Map for fast key-value lookup
   }

   // Helper function to remove a node from the Linked List
   removeNode(node) {
      node.prev.next = node.next;
      node.next.prev = node.prev;
   }

   // Helper function to add a node to the end of the Linked List
   addToTail(node) {
      node.prev = this.tail;
      node.next = null;
      this.tail.next = node;
      this.tail = node;
   }

   get(key) {
      if (this.cache.has(key)) {
         const node = this.cache.get(key);
         // Move the accessed item to the end of the Linked List (MRU position)
         this.removeNode(node);
         this.addToTail(node);
         return node.value;
      }
      return -1; // Key not found
   }

   put(key, value) {
      if (this.cache.has(key)) {
         // If the key already exists, update its value and move it to the end
         const node = this.cache.get(key);
         node.value = value;
         this.removeNode(node);
         this.addToTail(node);
      } else {
         // If the cache is at capacity, remove the LRU item (head) first
         if (this.size >= this.capacity) {
            const toRemove = this.head.next;
            this.removeNode(toRemove);
            this.cache.delete(toRemove.key);
            this.size--;
         }
         // Add the new item to the end of the Linked List and the Map
         const newNode = { key, value, prev: null, next: null };
         this.addToTail(newNode);
         this.cache.set(key, newNode);
         this.size++;
      }
   }
}

// Example usage:
const cache = new LRUCache(3);
cache.put('1', 'one');
cache.put('2', 'two');
cache.put('3', 'three');
console.log(cache.get('2')); // Output: "two" (2 is the most recently used)
cache.put('4', 'four'); // Evicts "1" because it's the least recently used
console.log(cache.get('1')); // Output: -1 (1 has been evicted)
