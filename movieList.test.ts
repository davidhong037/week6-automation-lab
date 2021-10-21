const { Builder, Capabilities, By } = require('selenium-webdriver')
require('chromedriver')
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:5500/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('We are adding, crossing off and deleting movies from a list', async () => {
    let addMovie = await driver.findElement(By.xpath("//input"))

    await driver.sleep(1000)
    await addMovie.sendKeys('Heat')
    await driver.findElement(By.css('button')).click()
    await driver.sleep(1000)
    await addMovie.sendKeys('Casino')
    await driver.findElement(By.css('button')).click()
    await driver.sleep(1000)
    await addMovie.sendKeys('Scarface')
    await driver.findElement(By.css('button')).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//span[text()='Heat']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//span[text()='Casino']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//span[text()='Scarface']")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
    await driver.sleep(1000)
    await driver.findElement(By.xpath("//button[text()='x'][1]")).click()
    await driver.sleep(1000)
})
