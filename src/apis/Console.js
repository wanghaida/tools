/* eslint-disable no-console */
/**
 * 日志
 * @desc 方便各 js 文件打印日志
 */
export const log = (...args) => {
    console.log('[Tools]:', ...args);
};

export const info = (...args) => {
    console.info('[Tools]:', ...args);
};

export const warn = (...args) => {
    console.warn('[Tools]:', ...args);
};

export const error = (...args) => {
    console.error('[Tools]:', ...args);
};
