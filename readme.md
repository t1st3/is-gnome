# is-gnome [![Build Status Travis](https://travis-ci.org/t1st3/is-gnome.svg?branch=master)](https://travis-ci.org/t1st3/is-gnome) [![Coverage Status](https://coveralls.io/repos/github/t1st3/is-gnome/badge.svg?branch=master)](https://coveralls.io/github/t1st3/is-gnome?branch=master)

> Check if the current session runs Gnome desktop 


## Install

```
$ npm install --save is-gnome
```


## Usage

```js
const isGnome = require('is-gnome');

isGnome().then(data => {
  console.log(data);
  //=> true or false
});
```


## API

### isGnome()

Is a promise.


## License

MIT © [t1st3](http://tiste.org)
