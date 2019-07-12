/* eslint-disable no-console */
const { Builder, By, Key, until } = require('selenium-webdriver')
require('selenium-webdriver/chrome')
require('selenium-webdriver/firefox')
require('chromedriver')
require('geckodriver')
const { querySelector } = require('./helpers')

const rootURL = 'https://www.mozilla.org/en-US/'
let driver
jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 5

beforeAll(async () => {
  driver = await new Builder().forBrowser('firefox').build()
})

afterAll(async () => driver.quit())

it('initialises the context', async () => {
  await driver.get(rootURL)
})

/*it('should click on navbar button to display a drawer', async () => {
  const anchor = await querySelector('[href=\'/en-US/firefox/\']', driver)
  const actual = await anchor.getText()
  const expected = 'Firefox'
  expect(actual).toEqual(expected)
})*/

it('should click on navbar button to display a drawer', async () => {
  //const anchor = await querySelector('[href=\'/en-US/firefox/\']', driver)
  /*for (var i = 0; i < 3; ++i) {
      new actionSequence(driver).sendKeys(key.TAB).perform().then(function () {
        console.log('Done selection?')
      })

      var millisecondsToWait = 500
      setTimeout(function () {
        // Whatever you want to do after the wait
      }, millisecondsToWait)
    }*/

  /*
  var key = require('selenium-webdriver').Key
  var actionSequence = require('selenium-webdriver').ActionSequence
  var actions = require('selenium-webdriver').Actions*/


  /*const anchor = await querySelector('[href=\'/en-US/firefox/\']', driver)
  const actual = await anchor.getText()
  const expected = 'Firefox'
  expect(actual).toEqual(expected)*/

  driver.actions().mouseMove(element, { x: 20, y: 75, }).perform().then(() => driver.actions().click().perform())


  /*driver.findElement(driver.By.css('mzp-c-menu-category-list')).then(function (elem) {
    driver.actions().mouseMove(elem).perform()
    driver.sleep(5000)
    driver.quit()
  })*/


  //var actions = driver.actions()

  /*var webdriver = require('selenium-webdriver')
  var driver = new webdriver.Builder().usingServer().withCapabilities({ 'browserName': 'chrome' }).build()

  driver.manage().window().setSize(1280, 1000).then(function () {
    driver.get('http://www.shazam.com/discover/track/58858793')
    driver.findElement(webdriver.By.css('.ta-tracks li:first-child')).then(function (elem) {
      driver.actions().mouseMove(elem).perform()
      driver.sleep(5000)
      driver.quit()
    })
  })*/

})