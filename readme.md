# minecraft-chat-parser

A simple parser for minecraft chat packets.

## Usage

Install:
`$ npm i dada513/mc-motd-transform`

Use:

```js
const packet = {
  extra: [
    {
      bold: true,
      text: "Hello World",
      color: "green",
    },
  ],
  text: "",
};
const parser = require("minecraft-chat-parser");
console.log(parser.parse(packet)); // Expected output: §l§aHello World
```
