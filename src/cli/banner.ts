import { paint } from "./colors";

/**
 * Exibe o banner de abertura da aplicação.
 * Deixa a entrega com "cara" de produto real.
 */
export const showBanner = (): void => {
    const banner = String.raw`
   ______                     _          _____ ____ 
  |  ____|                   (_)        |_   _/ ____|
  | |__  __  _____ _ __ ___   _  ___ _   _| || (___  
  |  __| \ \/ / _ \ '__/ __| | |/ _ \ | | | | \___ \ 
  | |____ >  <  __/ | | (__  | |  __/ |_| | |____) |
  |______/_/\_\___|_|  \___| |_|\___|\__,_|_____/ 
    `;

    console.log(paint(banner, "cyan", "bold"));
    console.log(paint("  ► TypeScript Edition — by [Seu Nome]", "dim"));
    console.log(paint("─".repeat(60), "blue"));
    console.log();
};
