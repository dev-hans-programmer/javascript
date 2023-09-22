class LURCache {
   constructor(max = 5) {
      this.max = max;
      this.cache = new Map();
   }

   get(key) {
      let item = this.cache.get(key);
      if (item) {
         this.cache.delete(key);
         this.cache.set(key, item);
      }
      return item;
   }
   set(key, value) {
      if (this.cache.has(key)) this.cache.delete(key);
      else if (this.cache.size === this.max) {
         this.cache.delete(this.cache.keys().next().value); // will remove the last item
      }

      this.cache.set(key, value);
   }
}

const lru = new LURCache();
lru.set('name', 'Hasan');
lru.set('age', '24');
lru.set('hobby', 'singing');
lru.set('address', 'Kolkata');
lru.set('flat', '428');
lru.set('occuption', 'Engg');
