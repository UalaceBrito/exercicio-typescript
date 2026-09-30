/**
 * Paleta ANSI para deixar a saída do terminal mais elegante,
 * sem precisar instalar bibliotecas externas como chalk.
 */
export const colors = {
    reset: "\x1b[0m",
    bold: "\x1b[1m",
    dim: "\x1b[2m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    bgBlue: "\x1b[44m",
} as const;

export type Color = keyof typeof colors;

export const paint = (text: string, ...styles: Color[]): string =>
    styles.map((style) => colors[style]).join("") + text + colors.reset;
