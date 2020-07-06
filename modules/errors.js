function parentFunc() {
    itsBroken();
}

function itsBroken() {
    return 3 + z;
}

function itsBrokenAsync(cb) {
    setTimeout(() => {
        try {

            return 3 + z;
        } catch (error) {
            console.error('Something is broken async.');
            cb(error);
        }
    });
}
try {
    // parentFunc();
    itsBrokenAsync((err) => console.log(err.message));
} catch (error) {
    console.error('Something is broken.', error);
}
console.log('My program still working');
