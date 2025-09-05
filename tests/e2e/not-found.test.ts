import { test, expect, type Page } from "@playwright/test";
import { beforeEach } from "node:test";

test.describe("Not Found Page", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/en/unknown");
    });

    test("should display 404 heading", async ({ page }) => {
        const heading = page.getByRole("heading", { name: "404", exact: true }).first();
        const subheading = page.getByRole("heading", { name: "Page Not Found", exact: true }).first();
        await expect(heading).toBeVisible();
        await expect(subheading).toBeVisible();
    });

    test("should click 'Go Home' button and navigate to home page", async ({ page }) => {
        await page.getByRole("link", { name: "Go Home", exact: true }).click();
        await expect(page).toHaveURL("http://localhost:3000/en");
    });

    test("should click 'View Services' button and navigate to services section", async ({ page }) => {
        await page.getByRole("link", { name: "View Services", exact: true }).click();
        await expect(page).toHaveURL("http://localhost:3000/en#services");
    });

    test("email link should have correct href", async ({ page }) => {
        const emailLink = page.getByRole("link", { name: "info@appstractlabs.com", exact: true });
        await expect(emailLink).toHaveAttribute("href", "mailto:info@appstractlabs.com");
    });
});