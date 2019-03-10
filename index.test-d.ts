import randomBytesReadableStream from '.';

randomBytesReadableStream().pipe(process.stdout);
randomBytesReadableStream({size: 50}).pipe(process.stdout);
