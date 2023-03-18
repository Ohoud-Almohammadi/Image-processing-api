# image-processing-api-proje

In this project, I build Api can use in 2 different ways. First, set the image name, width, and height in the URL and it will return a message that the image resize successfully
The second use is when an image with the required parameters already exists in the cache, it will return it without resizing it

## Setup Steps:

To get started, in your terminal run:

1. npm install
2. npm run lint
3. npm run prettier

To run tsc to build TypeScript and test it with jasmine:

npm run test

To run api:

npm run build
npm run start

## Example:

1. Resize new image
   localhost:3000/api/images?filename=santamonica&width=1500&height=1000

2. Retrive image from Cache:
   localhost:3000/api/images?filename=fjord&width=2500&height=2500
