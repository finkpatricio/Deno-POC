const encoder = new TextEncoder();
const helloTxt = encoder.encode("Hello, this is a test");

await Deno.writeFile("hello.txt", helloTxt);
