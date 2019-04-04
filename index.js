'use strict';
const {Readable: ReadableStream} = require('stream');
const {randomBytes} = require('crypto');

const randomBytesReadableStream = (options = {}) => {
	let producedSize = 0;

	return new ReadableStream({
		read(readSize) {
			let shouldEnd = false;

			if ((producedSize + readSize) >= options.size) {
				readSize = options.size - producedSize;
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
		}
	});
};

module.exports = randomBytesReadableStream;
// TODO: Remove this for the next major release
module.exports.default = randomBytesReadableStream;
