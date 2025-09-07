import { test, expect } from "@playwright/test";

test.describe("Home Page Header", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://appstractlabs.com/en");
        const acceptButton = page.getByRole("button", { name: "Accept Cookies" });
        await acceptButton.click();
        await expect(acceptButton).toBeHidden();
    });

    test("has title", async ({ page }) => {
        await expect(page).toHaveTitle("Appstract Labs - Software Agency");
    });

    test("should click nav links", async ({ page }) => {
        const homeLink = page.getByRole("link", { name: "Home" }).first();
        const servicesLink = page.getByRole("link", { name: "Services" }).first();
        const aboutLink = page.getByRole("link", { name: "About" }).first();
        const contactLink = page.getByRole("link", { name: "Contact" }).first();
        await homeLink.click();
        await servicesLink.click();
        await aboutLink.click();
        await contactLink.click();
    });

    test("should change language to ES", async ({ page }) => {
        const languageSwitcherES = page.getByRole("link", { name: "ES", exact: true }).first();
        await languageSwitcherES.click();
        await expect(page).toHaveURL("https://appstractlabs.com/es");
        const languageSwitcherEN = page.getByRole("link", { name: "EN", exact: true }).first();
        await expect(languageSwitcherEN).toBeVisible();
        await expect(languageSwitcherEN).toHaveText("EN");
    });

    test("should click the CTA button", async ({ page }) => {
        const ctaButton = page.getByRole("button", { name: "Get Started", exact: true }).first();
        await ctaButton.click();
        await expect(page).toHaveURL("https://appstractlabs.com/en#contact");
        await expect(page.locator("#contact")).toBeVisible();
    });
});