// https://github.com/hacklschorsch/selenium-webdriverjs-helloworld/blob/master/selenium-webdriverjs-helloworld.js

var webdriver = require('selenium-webdriver')
const { Builder, Key, By } = require('selenium-webdriver')

jasmine.DEFAULT_TIMEOUT_INTERVAL = 1000 * 60 * 20 // 20 seconds

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

it('tab through elements', async () => {

  /*var driver = new webdriver.Builder().forBrowser('http://localhost:4444/wd/hub').withCapabilities({
    'browserName': 'firefox',
    'version': '',
    'platform': 'ANY',
    'javascriptEnabled': true
  }).build()*/

  //var driver = new Builder().forBrowser('http://localhost:4444/wd/hub').build()

  var driver = await new Builder().forBrowser('firefox').build()
  driver.get('http://www.google.com')
  var element = driver.findElement(webdriver.By.name('q'))

  for (var i = 0; i < 5; ++i) {
    element.sendKeys(Key.TAB)
    //element = driver.findElement(By.css('input:focus')) // select next element to tab off.
    element = driver.switchTo().activeElement()

    await sleep(2000)
  }  

  driver.quit()
})