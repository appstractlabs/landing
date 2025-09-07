import { test, expect } from "@playwright/test";

test.describe("Services Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://appstractlabs.com/en");
        const cookiesButton = page.getByRole("button", { name: "Accept Cookies", exact: true }).first();
        await cookiesButton.click();
        await expect(cookiesButton).toBeHidden();
    });

    test("should display the correct number of service cards", async ({ page }) => {
        const serviceCards = page.locator("[data-test-id='services'] > div");
        await expect(serviceCards).toHaveCount(3);
    });

    test("should click the 'Learn More' button on the three services cards and verify navigation", async ({ page }) => {
        const serviceCards = page.locator("[data-test-id='services'] > div");
        const urls = [
            "https://appstractlabs.com/en/services/custom-web-applications",
            "https://appstractlabs.com/en/services/mvp-development",
            "https://appstractlabs.com/en/services/business-websites-platforms"
        ];
        for (let i = 0; i < 3; i++) {
            const learnMoreButton = serviceCards.nth(i).getByRole("link", { name: "Learn More", exact: true }).first();
            await learnMoreButton.click();
            await expect(page).toHaveURL(urls[i]);
            await page.goBack();
        }

        await expect(page).toHaveURL("https://appstractlabs.com/en");
    });

    test("should click the CTA button in each service and navigate to the contact section", async ({ page }) => {
        const serviceCards = page.locator("[data-test-id='services'] > div");
        const serviceUrls = [
            "https://appstractlabs.com/en/services/custom-web-applications",
            "https://appstractlabs.com/en/services/mvp-development",
            "https://appstractlabs.com/en/services/business-websites-platforms"
        ];

        for (let i = 0; i < 3; i++) {
            const learnMoreButton = serviceCards.nth(i).getByRole("link", { name: "Learn More", exact: true }).first();
            await learnMoreButton.click();
            await expect(page).toHaveURL(serviceUrls[i]);

            const ctaSection = page.locator("[data-test-id='contact-cta']");
            await ctaSection.scrollIntoViewIfNeeded();
            await expect(ctaSection).toBeVisible();

            const ctaButton = ctaSection.getByRole("link", { name: "Get Business Quote", exact: true });
            await ctaButton.click();
            await expect(page).toHaveURL("https://appstractlabs.com/en#contact");

            await page.goto("https://appstractlabs.com/en");
        }
    });

    test("should go back to service section when clicking the 'Back to Services' link from the header", async ({ page }) => {
        const serviceCards = page.locator("[data-test-id='services'] > div");
        for (let i = 0; i < 3; i++) {
            const learnMoreButton = serviceCards.nth(i).getByRole("link", { name: "Learn More", exact: true }).first();
            await learnMoreButton.click();
            const backToServicesLink = page.getByRole("button", { name: "Back to Services", exact: true }).first();
            await backToServicesLink.click();
            await expect(page).toHaveURL("https://appstractlabs.com/en#services");
        }
    });
});