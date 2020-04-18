require("@babel/register")({
  presets: ["next/babel"],
  only: ["./src/slack"],
  ignore: ["node_modules", ".next"],
});

require("./server.js");
