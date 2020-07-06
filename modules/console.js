console.log('Something');
console.info('Something else');
console.error('An error');
console.warn('A warning');

var table1 = [
    {
        a: 1,
        b: 'z'
    },
    {
        a: 2,
        b: 'Something'
    }
]
console.table(table1);

console.group('Process1');
console.log('Executing process..');
console.group('Subprocess');
console.log('Executing subprocess...');
console.groupEnd('Subprocess');
console.groupEnd('Process1');
console.log('Process2');

console.count('counter');
console.count('counter');
console.count('counter');
console.count('counter');
console.countReset('counter');
console.count('counter');
console.count('counter');








