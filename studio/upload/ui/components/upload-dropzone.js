/**
 * Upload Dropzone
 * Runtime upload entry surface.
 */

export class UploadDropzone {
  inspect() {
    return {
      ready: true,
      dragAndDrop: true,
      svgUpload: true
    };
  }
}

export const uploadDropzone =
  new UploadDropzone();
