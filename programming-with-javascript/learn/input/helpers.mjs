// NOTE: This is just for convenience, to avoid unnecessary typing or reading
export function log(...args) {
    console.log(...args);
}

export function show(expr) {
    // eslint-disable-next-line no-eval
    log(`The value of '${expr}' is '${JSON.stringify(eval(expr))}'.`);
}
