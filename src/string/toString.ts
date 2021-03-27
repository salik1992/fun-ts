interface ToString { toString: () => string }

export const toString = <T extends ToString>(x: T) => x.toString();
