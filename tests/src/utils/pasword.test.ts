import { describe, it, expect } from "vitest";
import { hashPassword, comparePassword } from "../../../src/utils/password.util"; // Asegúrate de que la ruta apunte correctamente a tu archivo password.util.ts

describe("password.util.ts", () => {
  const password1 = "ClaveUno123!";
  const password2 = "ClaveDos456!";

  it("Generación de hashes: cada uno es una cadena no vacía y diferente de su contraseña original", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(hash1).toBeDefined();
    expect(hash1.length).toBeGreaterThan(0);
    expect(hash1).not.toBe(password1);

    expect(hash2).toBeDefined();
    expect(hash2.length).toBeGreaterThan(0);
    expect(hash2).not.toBe(password2);
  });

  it("Contraseña correcta: comparePassword devuelve true", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password1, hash1)).toBe(true);
    expect(await comparePassword(password2, hash2)).toBe(true);
  });

  it("Contraseña incorrecta: comparePassword devuelve false", async () => {
    const hash1 = await hashPassword(password1);
    const hash2 = await hashPassword(password2);

    expect(await comparePassword(password2, hash1)).toBe(false);
    expect(await comparePassword(password1, hash2)).toBe(false);
  });
});