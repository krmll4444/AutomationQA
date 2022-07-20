describe('demo calculator tests', function () {

    it('test1', function () {
        //Positive test of calculation with plus
        browser.get('http://juliemr.github.io/protractor-demo/');
        element(by.model('first')).sendKeys('10');
        element(by.model('second')).sendKeys('9');
        element(by.css('[ng-click="doAddition()"]')).click();
        browser.sleep(2000)
        element(by.cssContainingText('.ng-binding', '19'))
    });
    it('test2', function () {
      //Negative test of calculation with plus (empty field) 
      browser.get('http://juliemr.github.io/protractor-demo/');
      element(by.model('first')).sendKeys('10');
      
      element(by.css('[ng-click="doAddition()"]')).click();
      
      element(by.cssContainingText('.ng-binding', 'NaN'));
      browser.sleep(1000)
      //auto returns NaN
  });
  it('test3', function () {
    //var Options = element.all(by.options('value in operators'));
    //Positive test of calculation with minus
    browser.get('http://juliemr.github.io/protractor-demo/');
    element(by.model('first')).sendKeys('10');
    var value = 'SUBTRACTION';
    element(by.model('operator option[selected]')).getAttribute('value').then(function(value){
      console.log('selected option is '+ value)});//no idea how to pick up operator from selector
    element(by.model('second')).sendKeys('9');
    element(by.css('[ng-click="doAddition()"]')).click();
    browser.sleep(2000)
    element(by.cssContainingText('.ng-binding', '1'))
});
});