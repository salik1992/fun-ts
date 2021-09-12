export const replace = (
    searched: string | RegExp,
    replacer: string | ((substring: string, ...args: any[]) => string),
) => (str: string) => (
    // @ts-ignore - that is ES3
    str.replace(searched, replacer)
);
