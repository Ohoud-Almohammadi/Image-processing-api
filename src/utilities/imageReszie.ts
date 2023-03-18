import { Request, Response } from 'express';
import sharp from 'sharp';
import path from 'path';

export const imageReszie = async (req: Request, res: Response): Promise<void> => {
  // Define parameters for request
  const { filename, width, height } = req.query;
  // Define the resized image location
  const outputFolder = path.join(__dirname, '../../images/thumbnails');
  // Resized image variable
  const newResizedImg = path.join(outputFolder, `${filename}_${width}x${height}.jpg`);
  // Use sharp to resize and save it to thumbnails folder

  sharp(res.locals.newImage)
    .resize(Number(width), Number(height))
    .toFile(newResizedImg, (): void => res.sendFile(newResizedImg as string));
};
