# any_function
해당 함수는 코딩과정 자주 나오는 함수들 모임입니다.
  [![NPM Version][npm-image]][npm-url]

## install
```
$ npm install any-function
```

## path
- 0.0.0 v1 file create
- 0.1.0 v1 file edit(function add)
- 0.1.1 bug fix
- 0.1.2 bug fix
- 0.1.3 isEmpty() -> You can also check the empty value of the object value.


## demo
- isEmpty()
The corresponding function checks whether or not the value is stored.
```
const any = require("any-function");
any.isEmpty();
```
- isNan()
The corresponding function checks whether or not the int type value is stored.
```
const any = require("any-function");
any.isNan();
```
- file_r()
A function that reads files.
```
const any = require("any-function");
any.file_r(path,name);
```
- file_w()
It's a function that saves file.
```
const any = require("any-function");
any.file_w(path,name,data);
```
- file_a()
It's a function that update file.
```
const any = require("any-function");
any.file_a(path,name,data);
```