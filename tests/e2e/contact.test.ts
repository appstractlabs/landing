import { test, expect } from "@playwright/test";

test.describe("Contact Section", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("http://localhost:3000/en");
        await page.setExtraHTTPHeaders({ "x-ci-e2e": "1" });
        const acceptButton = page.getByRole("button", { name: "Accept Cookies", exact: true }).first();
        await acceptButton.click();
        await expect(acceptButton).toBeHidden();
    });

    test("should submit the contact form with empty fields", async ({ page }) => {
        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();

        const submitButton = contactSection.getByRole("button", { name: "Send Message" });
        await submitButton.click();

        const nameError = page.getByRole("heading", { name: "Your name is required" });
        const emailError = page.getByRole("heading", { name: "Invalid email address" });
        const messageError = page.getByRole("heading", { name: "Message must be at least 10 characters long" });

        await expect(nameError).toBeVisible();
        await expect(emailError).toBeVisible();
        await expect(messageError).toBeVisible();
    });

    test("should display message error if the email is invalid", async ({ page }) => {
        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();

        const nameInput = contactSection.getByPlaceholder("Your Name");
        const emailInput = contactSection.getByPlaceholder("Your Email");
        const messageInput = contactSection.getByPlaceholder("Tell us about your project...");
        const submitButton = contactSection.getByRole("button", { name: "Send Message" });

        await nameInput.fill("John Doe");
        await emailInput.fill("invalid-email");
        await messageInput.fill("This is a valid message with more than ten characters.");
        await submitButton.click();

        const emailError = page.getByRole("heading", { name: "Invalid email address", exact: true }).first();
        await expect(emailError).toBeVisible();
    });

    test("should submit the contact form with valid data", async ({ page }) => {
        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();

        const nameInput = contactSection.getByPlaceholder("Your Name");
        const emailInput = contactSection.getByPlaceholder("Your Email");
        const messageInput = contactSection.getByPlaceholder("Tell us about your project...");
        const submitButton = contactSection.getByRole("button", { name: "Send Message" });

        await nameInput.fill("John Doe");
        await emailInput.fill("john.doe@example.com");
        await messageInput.fill("This is a valid message with more than ten characters.");
        await submitButton.click();

        await expect(nameInput).toHaveValue("");
        await expect(emailInput).toHaveValue("");
        await expect(messageInput).toHaveValue("");
    });

    test("should display error when the request limit has been reached", async ({ page }) => {
        const contactSection = page.locator("#contact");
        await contactSection.scrollIntoViewIfNeeded();
        await expect(contactSection).toBeVisible();

        const nameInput = contactSection.getByPlaceholder("Your Name");
        const emailInput = contactSection.getByPlaceholder("Your Email");
        const messageInput = contactSection.getByPlaceholder("Tell us about your project...");
        const submitButton = contactSection.getByRole("button", { name: "Send Message" });

        for (let i = 0; i < 2; i++) {
            await nameInput.fill("John Doe");
            await emailInput.fill("john.doe@example.com");
            await messageInput.fill("This is a valid message with more than ten characters.");
            await submitButton.click();
        }

        const errorMessage = page.getByRole("heading", { name: "You've reached the request limit, try again later.", exact: true }).first();
        await expect(errorMessage).toBeVisible();
    });
});