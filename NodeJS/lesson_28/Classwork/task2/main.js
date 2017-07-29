
const myBuffer = Buffer.alloc(100);
var str = '';

for (var n = 0; n < 100; n++) {
    str += n.toString();
}

myBuffer.write(str,0);

console.log('myBuffer= ', myBuffer.toString());

