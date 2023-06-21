import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/');
  await page.locator('input[name="name"]').click();
  await page.locator('input[name="name"]').fill('ihc');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('ihc');
  await page.goto('https://inf15979.disciplinas.rlaiola.inf.ufes.br/boca/index.php');
  await page.getByRole('button', { name: 'Login' }).click();

  await expect(page).toHaveTitle(/Team/);
});