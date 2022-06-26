import { defineConfig } from "vitest/config";
import { describe, test } from "vitest";

export default defineConfig({});
describe("suite", () => {
    test("serial test", async () => {
        /* ... */
    });
    test.concurrent("concurrent test 1", async () => {
        /* ... */
    });
    test.concurrent("concurrent test 2", async () => {
        /* ... */
    });
});
