/// <reference types="node"/>
import {Readable as ReadableStream} from 'stream';

declare namespace randomBytesReadableStream {
	interface Options {
		/**
		The total size to be produced by the stream in bytes.

		@default Infinity
		*/
		readonly size?: number;
	}
}

declare const randomBytesReadableStream: {
	/**
	Creates a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) producing cryptographically strong pseudo-random data using [`crypto.randomBytes()`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback).

	@returns By default, infinite data.

	@example
	```
	import randomBytesReadableStream = require('random-bytes-readable-stream');

	randomBytesReadableStream({size: 10}).pipe(process.stdout);
	```
	*/
	(options?: randomBytesReadableStream.Options): ReadableStream;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function randomBytesReadableStream(
	// 	options?: randomBytesReadableStream.Options
	// ): ReadableStream;
	// export = randomBytesReadableStream;
	default: typeof randomBytesReadableStream;
};

export = randomBytesReadableStream;
