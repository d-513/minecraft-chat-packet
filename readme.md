# minecraft-chat-packet

A simple parser for minecraft chat packets.

## Usage

Install:
`$ npm i minecraft-chat-packet`

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
const parser = require("minecraft-chat-packet");
console.log(parser.parse(packet)); // Expected output: §l§aHello World
```
