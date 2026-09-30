import { multiplicacao } from "./math/multiplicacao";
import { saudacao } from "./utils/saudacao";
import { showBanner } from "./cli/banner";
import { paint } from "./cli/colors";
import * as readline from "node:readline";

/**
 * Executa a demo automática dos dois requisitos do exercício.
 */
const runDemo = (): void => {
    console.log(paint("▶ DEMONSTRAÇÃO AUTOMÁTICA", "bold", "yellow"));
    console.log(paint("─".repeat(60), "blue"));

    const a = 6;
    const b = 7;
    const produto = multiplicacao(a, b);

    console.log(
        `  ${paint("multiplicacao", "magenta")}(${paint(String(a), "green")}, ` +
        `${paint(String(b), "green")}) → ${paint(String(produto), "bold", "green")}`
    );

    const nome = "Ada Lovelace";
    const msg = saudacao(nome);

    console.log(
        `  ${paint("saudacao", "magenta")}("${paint(nome, "green")}") ` +
        `→ ${paint(msg, "bold", "green")}`
    );

    console.log(paint("─".repeat(60), "blue"));
    console.log();
};

/**
 * Modo interativo: calcula a multiplicação com dados digitados
 * pelo usuário e imprime uma saudação personalizada.
 */
const runInteractive = (): void => {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    console.log(paint("▶ MODO INTERATIVO", "bold", "yellow"));

    rl.question(paint("  Seu nome: ", "cyan"), (nome: string) => {
        console.log("  " + paint(saudacao(nome), "bold", "green"));

        rl.question(paint("  Primeiro número: ", "cyan"), (n1: string) => {
            rl.question(paint("  Segundo número:  ", "cyan"), (n2: string) => {
                const numero1 = Number(n1);
                const numero2 = Number(n2);

                if (Number.isNaN(numero1) || Number.isNaN(numero2)) {
                    console.log(
                        "  " + paint("✗ Entrada inválida. Esperado números.", "red", "bold")
                    );
                } else {
                    console.log(
                        "  " +
                        paint(
                            `${numero1} × ${numero2} = ${multiplicacao(numero1, numero2)}`,
                            "bold",
                            "green"
                        )
                    );
                }

                console.log(paint("\n  ✔ Execução concluída com sucesso.", "dim"));
                rl.close();
            });
        });
    });
};

const main = (): void => {
    showBanner();
    runDemo();

    const isTTY = process.stdin.isTTY;
    if (isTTY) {
        runInteractive();
    } else {
        console.log(
            paint("  (Terminal não interativo — apenas demo exibida.)", "dim")
        );
    }
};

main();
