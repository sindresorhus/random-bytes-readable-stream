'use strict';
const {Readable: ReadableStream} = require('stream');
const {randomBytes} = require('crypto');

module.exports = (options = {}) => {
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
