/**
 * Upload Watchers
 * Filesystem synchronization authority.
 */

export class UploadWatchers {
  start() {
    console.log(
      "[Upload Watchers Operational]"
    );
  }
}

export const uploadWatchers =
  new UploadWatchers();
