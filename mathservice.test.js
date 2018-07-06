import './node_modules/angular/angular';
import './node_modules/angular-mocks/angular-mocks';
import './app';


describe('Math service- addTwoNumbers', () => {
	beforeEach(
    angular.mock.module('app')
  );

	var _mathService;

	beforeEach(inject((mathservice_) => {
		_mathService = mathservice;
	}))

	it('iago', () => {
		const result = _mathService.addTwoNumbers(1, 1);
		expect(result).toEqual(2);
	})
});