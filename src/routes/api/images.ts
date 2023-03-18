import express from 'express';
import { checkExists } from '../../middlewares/checkExists';
import { imageReszie } from '../../utilities/imageReszie';
import { validate } from '../../middlewares/validations';

// Create image object
const image = express.Router();
// Set router and call middlewares
image.get('/', validate, checkExists, imageReszie);

export default image;
