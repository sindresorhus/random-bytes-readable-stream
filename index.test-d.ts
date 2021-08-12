import process from 'node:process';
import randomBytesReadableStream from './index.js';

randomBytesReadableStream().pipe(process.stdout); // eslint-disable-line @typescript-eslint/no-unsafe-member-access
randomBytesReadableStream({size: 50}).pipe(process.stdout); // eslint-disable-line @typescript-eslint/no-unsafe-member-access
