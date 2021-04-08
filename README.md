# Babel plugin demo

### Example about how to write and configure a simple custom babel plugin

Adds a new JS identifier called `answerToTheUltimateQuestionOfLifeTheUniverseAndEverything`, that it will be replaced with the value `42` by Babel in compile time.

For example, it should convert this code:

```js
console.log(`What is the answer?: ${answerToTheUltimateQuestionOfLifeTheUniverseAndEverything}`);
```

...to this one:

```js
console.log(`What is the answer?: ${42}`);
```

## Setup

Run `npm install`.

## Usage

Run the compiler:

```
npm run build
```

It will compile the source file in `sample/index.js` to `lib/index.js`. Check the code of both files to see the difference. The compiled file can be executed with `node lib`.
