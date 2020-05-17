import LogIn from '../pages/LogIn';

describe('login form', () => {
    it('should deny access with wrong creds', () => {
        LogIn.open();
        LogIn.setUsername('Genesis');
        LogIn.setPassword('Mama');
        LogIn.pressLogInBtn();
        LogIn.errorAppeared();
    });
});