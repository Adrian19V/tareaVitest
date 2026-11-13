import { describe, it, expect } from "vitest";
import { generateSixDigitCode } from "../../../src/utils/password.util"; // O el archivo correspondiente si lo tienes separado

describe("generateCode.util.ts", () => {
  it("Debe generar un código de 6 dígitos numéricos", () => {
    const code = generateSixDigitCode();
    expect(code).toHaveLength(6);
    expect(Number(code)).not.toBeNaN();
  });
});