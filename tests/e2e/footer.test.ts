import { test, expect } from "@playwright/test";

test.describe("Footer Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://appstractlabs.com/en");
        const acceptButton = page.getByRole("button", { name: "Accept Cookies", exact: true }).first();
        await acceptButton.click();
        await expect(acceptButton).toBeHidden();
    });

    test("should display 'Privacy Policy', 'Terms of Service', and 'Cookies Policy' buttons", async ({ page }) => {
        const footer = page.locator("footer");
        await footer.scrollIntoViewIfNeeded();
        const privacyPolicyButton = footer.getByRole("button", { name: "Privacy Policy", exact: true }).first();
        const termsOfServiceButton = footer.getByRole("button", { name: "Terms of Service", exact: true }).first();
        const cookiesPolicyButton = footer.getByRole("button", { name: "Cookies Policy", exact: true }).first();

        await expect(privacyPolicyButton).toBeVisible();
        await expect(termsOfServiceButton).toBeVisible();
        await expect(cookiesPolicyButton).toBeVisible();
    });

    test("should open modals when 'Privacy Policy', 'Terms of Service', and 'Cookies Policy' buttons are clicked", async ({ page }) => {
        const footer = page.locator("footer");
        await footer.scrollIntoViewIfNeeded();
        
        const privacyPolicyButton = footer.getByRole("button", { name: "Privacy Policy", exact: true }).first();
        const termsOfServiceButton = footer.getByRole("button", { name: "Terms of Service", exact: true }).first();
        const cookiesPolicyButton = footer.getByRole("button", { name: "Cookies Policy", exact: true }).first();

        // Test Privacy Policy Modal
        await privacyPolicyButton.click();
        const privacyPolicyModal = page.locator("[role='dialog']").filter({ hasText: "Privacy Policy" }).first();
        await expect(privacyPolicyModal).toBeVisible();
        
        const privacyDialogFooter = privacyPolicyModal.locator("[data-slot='dialog-footer']");
        await privacyDialogFooter.scrollIntoViewIfNeeded();
        const closePrivacyPolicyButton = privacyDialogFooter.getByRole("button", { name: "Close", exact: true });
        await closePrivacyPolicyButton.click();
        await expect(privacyPolicyModal).toBeHidden();

        // Test Terms of Service Modal
        await termsOfServiceButton.click();
        const termsOfServiceModal = page.locator("[role='dialog']").filter({ hasText: "Terms of Service" }).first();
        await expect(termsOfServiceModal).toBeVisible();
        
        const termsDialogFooter = termsOfServiceModal.locator("[data-slot='dialog-footer']");
        await termsDialogFooter.scrollIntoViewIfNeeded();
        const closeTermsOfServiceButton = termsDialogFooter.getByRole("button", { name: "Close", exact: true });
        await closeTermsOfServiceButton.click();
        await expect(termsOfServiceModal).toBeHidden();

        // Test Cookies Policy Modal
        await cookiesPolicyButton.click();
        const cookiesPolicyModal = page.locator("[role='dialog']").filter({ hasText: "Cookies Policy" }).first();
        await expect(cookiesPolicyModal).toBeVisible();
        
        const cookiesDialogFooter = cookiesPolicyModal.locator("[data-slot='dialog-footer']");
        await cookiesDialogFooter.scrollIntoViewIfNeeded();
        const closeCookiesPolicyButton = cookiesDialogFooter.getByRole("button", { name: "Close", exact: true });
        await closeCookiesPolicyButton.click();
        await expect(cookiesPolicyModal).toBeHidden();
    });
});