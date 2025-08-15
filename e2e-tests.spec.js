const { test, describe, expect } = require('@playwright/test')

describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('/')
    await expect(page.getByText('ivysaur')).toBeVisible()
    await expect(page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')).toBeVisible()
  })

  test('pokemon page can be opened', async ({ page }) => {
    // Navigate to the pokemon page
    await page.goto('/pokemon/ivysaur')
    // Wait for the page to load and API calls to complete
    await page.waitForLoadState('networkidle')
    // Check if the pokemon name is visible (this means the page loaded successfully)
    await expect(page.getByText('ivysaur')).toBeVisible()
    // Check for navigation links
    await expect(page.getByText('Previous')).toBeVisible()
    await expect(page.getByText('Next')).toBeVisible()
    await expect(page.getByText('Home')).toBeVisible()
    // Check for pokemon abilities (with a longer timeout since they come from API)
    await expect(page.getByText('overgrow')).toBeVisible({ timeout: 10000 })
    await expect(page.getByText('chlorophyll')).toBeVisible({ timeout: 10000 })
  })
})
