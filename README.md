# yt-dm-stream-url
>  Node project to get the live m3u8 streaming links from youtube & dailymotion

## Installation
[Node.js](https://nodejs.org/en/) required
```bash
npm install yt-dm-stream-url
```

## Usage

```js
import yt from 'yt-dm-stream-url';

const outputImagePath = 'target/mergedImage.png';   // your output image name & directory
const list = ['image1.png', 'image2.png', 'image3.png'];    // list of images
await this.mergeImagesVertically(list, outputImagePath)
    .then(() => console.log('Images merged successfully'))
    .catch((err) => console.error('Error:', err));
```
Example output:
```js

'Images merged successfully'

```

## Contribute
Did you find a bug? Do you have an idea or a feature request? [Open an issue!](https://github.com/bhanuagarwal73/merge-images/issues)

## License
[ISC](https://github.com/bhanuagarwal73/yt-dm-stream-url/blob/master/LICENSE)