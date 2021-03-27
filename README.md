# fun-ts
A collection of utilities for functional programming in TS fully typed

## Modules
- **[Core](#Core)**
- **[Array](#Array)**
- **[Condition](#Condition)**
- **[Math](#Math)**
- **[String](#String)**

## Core

### log
Function that logs one parameter with a label and returns back the logged parameter.
```ts
log = <T>(label: string) => (toLog: T): T
```
**E.g.**
```ts
const contacts = compose(map((user) => user.name), log('Favourite users'), filter(favouritesOnly));
```

### compose
Function for composing multiple functions. First function (listed last) can have multiple input params.
Other functions must follow 1 input, 1 output. It is safely typed and if function types do not link
together a custom TypeError type is returned instead.
```ts
compose<T, U>((arg: any) => T, ...((arg: any) => any), (...args: U) => any): (...args: U) => T
```
**E.g.**
```ts
const maxCelsiusNumberToFahrenheitString = compose(append('°F'), numberToString, add(32), multiply(1.8), Math.max);
// typeof maxCelsiusNumberToFahrenheitString = (...numbers: number[]) => string

const incorrectLink = compose(append('°F'), add(32), multiply(1.8), Math.max);
// typeof incorrectLink = TypeError<
//    "Can't pass result into next function at position (from right)", 4,
//    (b: number) => number, "--> into -->", (appendee: string) => string
// >
```

### pipe
Function for creating function from piping through multiple functions. First function can have multiple input params.
Other functions must follow 1 input, 1 output. It is safely typed and if function types do not link
togerther a custom TypeError type is returned instead.
```ts
pipe<T, U>((...args: U) => any, ...((arg: any) => any), (arg: any) => T): (...args: U) => T
```
**E.g.**
```ts
const minFahrenheitNumberToCelsiusString = pipe(Math.min, subtract(32), divide(1.8), numberToString, append('°C'));
// typeof minFahrenheitNumberToCelsiusString = (...numbers: number[]) => string

const incorrectLink = pipe(Math.min, subtract(32), divide(1.8), append('°C'));
// typeof incorrectLink = TypeError<
//    "Can't pass result into next function at position", 4,
//    (b: number) => number, "--> into -->", (appendee: string) => string
// >
```

## Array

### every
Function that returns true if all elements of the array match the predicate.
```ts
every = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]): boolean;
```
**E.g.**
```ts
const test = [1, 2, 3, '4'];
every((n) => typeof n === 'number')(test); // => false ('4' is not a type of number)
```

### filter
Function for filtering an array.
```ts
filter = <T>(
    predicate: (value: any, index: number, array: any[]) => value is T,
) => (array: any[]): T[];
```
**E.g.**
```ts
const numbers = [-3, -2, -1, 0, 1, 2, 3];
const positiveOnly = (n: number) => n > 0;
const filterPositiveOnly = filter(positiveOnly);
filterPositiveOnly(numbers); // => [1, 2, 3];
```

### find
Function to find first entry that matches the predicate.
```ts
find = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]): T | undefined;
```
**E.g.**
```ts
const users = [{ id: 1, name: 'Frank' }, ...];
const byId = (idToFind: number) => ({ id }) => id === idToFind;
const findById = (idToFind: number) => find(byId(idToFind));

const user1 = findById(1)(users);
```

### findIndex
Function to findex the index of first entry that matches the predicate.
```ts
findIndex = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]): number;
```
**E.g.**
```ts
const users = [{ id: 1, name: 'Frank' }, ...];
const indexOfFrank = findIndex(({ name }) => name === 'Frank')(users);
```

### flat
Function to flatten the array.
```ts
flat = (array: any[]) => array.flat();
```
**E.g.**
```ts
const numbers = [[1], [2], [3]];
flat(numbers); // => [1, 2, 3];
```

### forEach
Function to run a function for each element of the array.
```ts
forEach = <T>(
    eachFunction: (value: T, index: number, array: T[]) => void,
) => (array: T[]): undefined;
```
**E.g.**
```ts
const users = [{ id: 1, name: 'Frank' }, ...];
const logUsers = forEach(log('User:'));
logUsers(users);
```

### map
Function to map one array into another array.
```ts
map = <T, U>(
    mappingFunction: (value: T, index: number, array: T[]) => U,
) => (array: T[]): U[];
```
**E.g.**
```ts
const numbers = [1, 2, 3, 4];
const toDouble = map((n) => n * 2);
toDouble(numbers); // => [2, 4, 6, 8];
```

### reduce
Function to reduce array to accumulator.
```ts
reduce = <T, U>(
    reducer: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
) => (initialValue: U) => (array: T[]): U;
```
**E.g.**
```ts
const sum = reduce((acc: number, value: number) => acc + value)(0);
const product = reduce((acc: number, value: number) => acc * value)(1);
const numbers = [1, 2, 3, 4];
sum(numbers); // => 10
product(numbers); // => 24
```

### reduceRight
Function to reduce array to accumulator going from the end of array.
```ts
reduceRight = <T, U>(
    rightReducer: (accumulator: U, currentValue: T, index: number, array: T[]) => U,
) => (initialValue: U) => (array: T[]): U;
```

### reverse
Function to reverse an array. It returns a new array and does not modify the original.
```ts
reverse = <T>(array: T[]) => [...array].reverse();
```
**E.g.**
```ts
const numbers = [1, 2, 3];
reverse(numbers); // => [3, 2, 1];
```

### some
Function that returns true if any of the elements of the array match the predicate.
```ts
some = <T>(
    predicate: (value: T, index: number, array: T[]) => boolean,
) => (array: T[]): boolean;
```
**E.g.**
```ts
const test = [1, 2, 3, '4'];
some((n) => typeof n === 'string')(test); // => true ('4' is a type of string)
```

## Condition

### and
Function that returns true if all passed conditions are true.
```ts
and = (...conditions: boolean): boolean;
```
**E.g.**
```ts
and(true, true, false); // => false
```

### cond
Main function for writing conditional statements.
```ts
cond = (condition: boolean) => (truthyBranch: B1) => (falsyBranch: B2): ReturnType<B1 | B2>;
```
**E.g.**
```ts
cond(isDefined(array))(() => array)(() => []);
```

### isDefined
Function that returns true if the passed param is not undefined.
```ts
isDefined = <T>(value: T | undefined): value is T;
```
**E.g.**
```ts
isDefined(0); // => true
isDefined(undefined); // => false
```

### isFalsy
Function that returns true if the passed param is false when cast to boolean.
```ts
isFalsy = (value: any): boolean;
```
**E.g.**
```ts
isFalsy('Hello'); // => false
isFalsy(0); // => true
```

### isNotNull
Function that returns true if the passed param is not null.
```ts
isNotNull = <T>(value: T | null): value is T;
```
**E.g.**
```ts
isNotNull(0); // => true
isNotNull(null); // => false
```

### isNotNullNorUndefined
Function that returns true if the passed param is not null nor undefined.
```ts
isNotNullNorUndefined = <T>(value: T | null | undefined): value is T;
```
**E.g.**
```ts
isNotNullNorUndefined(0); // => true
isNotNullNorUndefined(null); // => false
isNotNullNorUndefined(undefined); // => false
```

### isTruthy
Function that returns true if the passed param is true when cast to boolean.
```ts
isTruthy = (value: any): boolean;
```
**E.g.**
```ts
isTruthy('Hello'); // => true
isTruthy(1); // => true
```

### not
Function that negates passed boolean value.
```ts
const not = (value: boolean): boolean;
```
**E.g.**
```ts
not(true); // => false
not(false); // => true
```

### or
Function that returns true if any of the params is true.
```ts
or = (...conditions: boolean[]): boolean;
```
**E.g.**
```ts
or(true, false, false); // => false
```

### xor
Function that returns true if one and only one if the params is true.
```ts
xor = (...conditions: boolean[]): boolean;
```
**E.g.**
```ts
xor(true, false, false); // => true
xor(false, true, true); // => false
```

## Math

### add
Function to sum two numbers.
```ts
add = (a: number) => (b: number): number; // a + b
```
**E.g.**
```ts
const numbers = [1, 2, 3];
map(add(5))(numbers); // => [6, 7, 8];
```

### divide
Function to divide second number by first number.
```ts
divide = (a: number) => (b: number): number; // b / a
```
**E.g.**
```ts
const numbers = [10, 20, 30];
map(divide(10))(numbers); // => [1, 2, 3];
```

### modulo
Function to get modulo.
```ts
modulo = (a: number) => (b: number): number; // b % a
```
**E.g.**
```ts
const numbers = [1, 2, 3];
map(modulo(2))(numbers); // => [1, 0, 1];
```

### multiply
Function to multiply two numbers.
```ts
multiply = (a: number) => (b: number): number; // a * b
```
**E.g.**
```ts
const numbers = [1, 2, 3];
map(multiply(10))(numbers); // => [10, 20, 30];
```

### product
Function to get a product of an array.
```ts
product = (array: number[]): number;
```
**E.g.**
```ts
const numbers = [1, 2, 3, 4];
product(numbers); // => 24
```

### subtract
Function to subtract first number from the second number.
```ts
subtract = (a: number) => (b: number): number; // b - a
```
**E.g.**
```ts
const numbers = [6, 7, 8];
map(subtract(5))(numbers); // => [1, 2, 3];
```

### sum
Function to get a sum of an array.
```ts
sum = (array: number[]): number;
```
**E.g.**
```ts
const number = [1, 2, 3, 4];
sum(numbers); // => 10
```

## String

### join
Function to join an array of strings with a separator to a single string.
```ts
join = (separator: string) => (array: string[]): string;
```
**E.g.**
```ts
const numbers = [1, 2, 3];
join(', ')(map(toString)(numbers)); // => '1, 2, 3'
```

### split
Function to split a string by divider.
```ts
split = (divider: string) => (s: string): string[];
```
**E.g.**
```ts
const numbers = '1, 2, 3, 4';
split(', ')(numbers); // => ['1', '2', '3', '4'];
```

### toString
Function to convert anything with `.toString()` function to string.
```ts
interface ToString { toString: () => string }

toString = <T extends ToString>(x: T): string;
```
**E.g.**
```ts
const numbers = [1, 2, 3, 4];
map(toString)(numbers); // => ['1', '2', '3', '4'];
```
