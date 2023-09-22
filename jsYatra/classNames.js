// Implement classNames
/**
 * classNames('foo', 'bar'); // => 'foo bar'
classNames('foo', { bar: true }); // => 'foo bar'
classNames({ 'foo-bar': true }); // => 'foo-bar'
classNames({ 'foo-bar': false }); // => ''
classNames({ foo: true }, { bar: true }); // => 'foo bar'
classNames({ foo: true, bar: true }); // => 'foo bar'

// lots of arguments of various types
classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); // => 'foo bar baz quux'

// other falsy values are just ignored
classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); // => 'bar 1'
 * 
 * 
 */

function classNamess(...args) {
   const classNames = [];

   args.forEach((classItem) => {
      if (!classItem) return;
      const type = typeof classItem;

      if (type === 'string' || type === 'number') {
         return classNames.push(classItem);
      }
      if (Array.isArray(classItem))
         return classNames.push(classNamess(...classItem)); // recursion

      if (type === 'object' && !Array.isArray(classItem)) {
         for (const key in classItem) {
            if (classItem[key]) classNames.push(key);
         }
      }
   });
   return classNames.join(' ');
}
console.log(
   classNamess('foo', { bar: true, duck: false }, 'baz', { quux: true }, [
      { hans: true, ali: true },
   ])
);
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, '');
