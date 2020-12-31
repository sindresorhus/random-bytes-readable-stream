# random-bytes-readable-stream

> Creates a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) producing cryptographically strong pseudo-random data using [`crypto.randomBytes()`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback)

It's like a cross-platform `fs.createReadStream('/dev/urandom')`.


## Install

```
$ npm install random-bytes-readable-stream
```


## Usage

```js
const randomBytesReadableStream = require('random-bytes-readable-stream');

randomBytesReadableStream({size: 10}).pipe(process.stdout);
```


## API

### randomBytesReadableStream([options])

Returns a [`stream.Readable`](https://nodejs.org/api/stream.html#stream_readable_streams).

By default, it produces infinite data.

#### options

Type: `Object`

##### size

Type: `number`<br>
Default: `Infinity`

The total size to be produced by the stream in bytes.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
