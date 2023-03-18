import path from 'path';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';

export const checkExists = (req: Request, res: Response, next: NextFunction): Response | void => {
  // Create a function to check for the existence of the requested image
  const exists = (folder: string, filename: string): string | null => {
    //#1 Take enterd information
    const requistedImage = path.join(folder, filename);
    //#2 Check existence
    const isFound = fs.existsSync(requistedImage);
    return isFound ? requistedImage : null;
  };

  // Define main folders
  const fullFolder = path.join(__dirname, '../../images/full');
  const thumbFolder = path.join(__dirname, '../../images/thumbnails');

  // Take  parameters
  const { filename, width, height } = req.query;

  // Check if requisted image exists in fullfolder
  const inputImg = exists(fullFolder, `${filename}.jpg`);
  // Send message if requisted image is not found
  if (!inputImg) return res.status(404).send('Requisted Image not found !');
  if (!width && !height) return res.sendFile(inputImg);
  // Check if requisted image exists in thumbfolder
  const ImageCached = exists(thumbFolder, `${filename}(${width}x${height}).jpg`);
  if (ImageCached) return res.sendFile(ImageCached);

  res.locals.newImage = inputImg;
  next();
};
