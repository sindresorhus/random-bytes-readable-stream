import {Readable as ReadableStream} from 'node:stream';
import {randomBytes} from 'node:crypto';

export default function randomBytesReadableStream({size = Number.POSITIVE_INFINITY} = {}) {
	let producedSize = 0;

	return new ReadableStream({
		read(readSize) {
			let shouldEnd = false;

			if ((producedSize + readSize) >= size) {
				readSize = size - producedSize;
				shouldEnd = true;
			}

			randomBytes(readSize, (error, buffer) => {
				if (error) {
					this.emit('error', error);
					return;
				}

				producedSize += readSize;
				this.push(buffer);

				if (shouldEnd) {
					this.push(null);
				}
			});
		},
	});
}
