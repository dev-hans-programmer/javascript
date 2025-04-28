function flattenObject(obj = {}, prefix = ''){
    const result = {}
    Object.entries(obj).forEach(([key, value]) => {
        const newKey = prefix ? `${prefix}.${key}`: key;
        if(typeof value === 'object') {
            Object.assign(result, flattenObject(value, newKey));
        }else {
           result[newKey] = value; 
        }
    })
    return result;
}

const input = {a: {b: {c: 10}, d: 15}}
console.log(flattenObject(input))