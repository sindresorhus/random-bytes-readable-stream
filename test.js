import test from 'ava';
import getStream from 'get-stream';
import randomBytesReadableStream from '.';

test('main', async t => {
	const stream = randomBytesReadableStream();

	setTimeout(() => {
		stream.emit('end');
	}, 400);

	t.true((await getStream.buffer(stream)).length > 100);
});

test('`size` option', async t => {
	const stream = randomBytesReadableStream({size: 100});
	t.is((await getStream.buffer(stream)).length, 100);
});
