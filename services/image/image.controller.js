import http from 'http';
import fs from 'fs';
import url from 'url';
import path from 'path';
import sharp from 'sharp';
import { isValidImageFormat } from './utils';

export function createThumbnail({ body }, response, next) {
  try {
    const { url: fileUrl } = body;

    if (!isValidImageFormat(fileUrl)) {
      return response.status(400).json({
        status: 'error',
        message: 'URL supplied contains an unsupported image format.',
      });
    }

    let fileName = url.parse(fileUrl).pathname.split('/').pop();
    fileName = path.join(__dirname, fileName);
    const file = fs.createWriteStream(fileName);

    const options = {
      host: url.parse(fileUrl).host,
      port: 80,
      path: url.parse(fileUrl).pathname,
    };

    return http.get(options, (res) => {
      res.on('data', (data) => {
        file.write(data);
      }).on('end', () => {
        file.end();

        sharp(fileName)
          .resize(50)
          .toBuffer()
          .then((data) => {
            fs.writeFileSync(fileName, data);

            return response.status(200).sendFile(fileName);
          })
          .catch(() => response.status(400).json({
            status: 'error',
            message: 'URL supplied contains an unsupported image format.',
          }));
      });
    });
  } catch (error) {
    return next(error);
  }
}
