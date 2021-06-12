export const fetcher =
  (library) =>
  (...args) => {
    // because we need to update when chain id changes
    // so it's necessary to catch it
    const [chainId, method, ...params] = args;
    console.log(method, params, chainId);
    return library[method](...params);
  };
