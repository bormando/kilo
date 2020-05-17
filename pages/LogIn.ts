import { assert } from 'chai';
import Page from './Page';

class LogIn extends Page {

    get username() { return this.getElement('#wpName1', 'Username input field'); }
    get password() { return this.getElement('#wpPassword1', 'Password input field'); }
    get logInBtn() { return this.getElement('#wpLoginAttempt', `'Log in' button`); }
    get error() { return this.getElement('.errorbox', 'Error message'); }

    open() {
        super.open('/w/index.php?title=Special:UserLogin&returnto=Main+Page');
    }

    setUsername(username: string) {
        this.username?.setValue(username);
    }

    setPassword(password: string) {
        this.password?.setValue(password);
    }

    pressLogInBtn() {
        this.logInBtn?.click();
    }

    errorAppeared() {
        let message = this.error?.getText();
        assert(message?.includes('Incorrect username or password'), `Error message is something different: ${message}`);
    }
}

export default new LogIn();