function isChunkLoadError(error) {
  const message = error?.message || "";
  return error?.name === "ChunkLoadError" || /Loading chunk .* failed|ChunkLoadError/i.test(message);
}

export default function lazyRetry(importer, key) {
  return new Promise((resolve, reject) => {
    const storageKey = `lazy-retry:${key}`;
    const canUseStorage = typeof window !== "undefined" && typeof window.sessionStorage !== "undefined";
    const hasRefreshed = canUseStorage && window.sessionStorage.getItem(storageKey) === "true";

    importer()
      .then((module) => {
        if (canUseStorage) {
          window.sessionStorage.setItem(storageKey, "false");
        }
        resolve(module);
      })
      .catch((error) => {
        if (isChunkLoadError(error) && canUseStorage && !hasRefreshed) {
          window.sessionStorage.setItem(storageKey, "true");
          window.location.reload();
          return;
        }

        if (canUseStorage) {
          window.sessionStorage.setItem(storageKey, "false");
        }
        reject(error);
      });
  });
}
