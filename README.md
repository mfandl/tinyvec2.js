# tinyvec2.js
Tiny 2D vector math library for JavaScript.

# Description
tinyvec2.js is a couple-of-lines long vector library designed with readability in mind. I found myself writing something similar many times, either when explaining vector math to my peers, or as part of quick experiments where I did not want to deal with managing dependencies.

While I enjoyed writing vector math functions every single time, sometimes the development momentum of what I really needed to build got lost. I wrote this piece of code so it is less likely happen again.

# What is inside?
* Couple of common vector functions.
* No heavy abstractions. Vector is an array with 2 elements `[x, y]`.
* Purity. Meaning *no mutation*. This is why you maybe do not want to use this library in your game. Some operations create new arrays.
* Contemporary JavaScript. Use a transpiler of your choice if you need to support older browsers.
* ES6 module.
* No validation.
* No dependencies.

# When to use this?
* You study or teach vector math.
* You need a quick reminder on how to perform common operations on 2D vectors.
* You need a 2D vector math library that you can just import as ES6 module.
* You are building a 2D vector math library and want to start somewhere.

# Sample program
```javascript
import { add, mul, norm } from './tinyvec2.js'

const position = [0, 0]
const direction = [1, 1]
const speed = 20

const velocity = mul(norm(direction), speed)
const updatedPosition = add(position, velocity)
``` 

# License
[MIT](LICENSE)
