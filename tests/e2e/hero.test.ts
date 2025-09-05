import { test, expect } from "@playwright/test";

test.describe("Hero Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/en");
        const acceptButton = page.getByRole("button", { name: "Accept Cookies" });
        await acceptButton.click();
        await expect(acceptButton).toBeHidden();
    });

    test("should click CTA button", async ({ page }) => {
        const ctaButton = page.getByRole("link", { name: "Start Your Project", exact: true }).first();
        await ctaButton.click();
        await expect(page).toHaveURL("http://localhost:3000/en#contact");
        await expect(page.locator("#contact")).toBeVisible();
    });
});