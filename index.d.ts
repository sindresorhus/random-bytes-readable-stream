/// <reference types="node"/>
import {Readable} from 'stream';

export interface Options {
	/**
	 * The total size to be produced by the stream in bytes.
	 *
	 * @default Infinity
	 */
	readonly size?: number;
}

/**
 * Creates a [readable stream](https://nodejs.org/api/stream.html#stream_readable_streams) producing cryptographically strong pseudo-random data using [`crypto.randomBytes()`](https://nodejs.org/api/crypto.html#crypto_crypto_randombytes_size_callback).
 *
 * @returns By default, it produces infinite data.
 */
export default function randomBytesReadableStream(options?: Options): Readable;
