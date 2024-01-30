# merge-images
>  Node project to merge the multiple images into single image

## Installation
[Node.js](https://nodejs.org/en/) required
```bash
npm install merge-images-typescript
```

## Usage

```js
import yt from 'merge-images-typescript';

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