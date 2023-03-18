import path from 'path';
import { Request, Response } from 'express';
import { imageReszie } from '../utilities/imageReszie';

describe('Test image processing using sharp function:', (): void => {
  // Test for correct request
  it('should resize image successfully', async (): Promise<void> => {
    // Set parameters as request
    const req = { query: { filename: 'fjord', width: 1500, height: 2000 } } as unknown as Request;
    const res = {
      sendFile: (resziedImg: string): string => resziedImg,
      locals: { newImage: path.join(__dirname, '../../images/full/fjord.jpg') }
    } as unknown as Response;

    expect(async (): Promise<void> => {
      await imageReszie(req, res);
    }).not.toThrow();
  });
});
