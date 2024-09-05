class SignUpForm {

    constructor(page) {
        
        this.page = page;
        this._nameField = page.locator('#signupName');
        this._lastNameField = page.locator('#signupLastName');
        this._emailField = page.locator('#signupEmail');
        this._passwordField = page.locator('#signupPassword');
        this._rePasswordField = page.locator('#signupRepeatPassword');
        this._registerButton = page.locator('div.modal-footer button.btn.btn-primary');
    }

    async enterName(name) {
        await this._nameField.fill(name);
    }

    async enterLastName(lastName) {
        await this._lastNameField.fill(lastName);
    }

    async enterEmail(email) {
        await this._emailField.fill(email);
    }

    async enterPassword(password) {
        await this._passwordField.fill(password);
    }

    async enterRePassword(rePassword) {
        await this._rePasswordField.fill(rePassword);
    }

    async fillInRegisterForm(name, lastName, email, password, rePassword) {
        await this.enterName(name);
        await this.enterLastName(lastName);
        await this.enterEmail(email);
        await this.enterPassword(password);
        await this.enterRePassword(rePassword);
    }

    async blurField(fieldName) {

        if (fieldName === "name"){
            this._nameField.blur();
        } else if (fieldName ==="lastName") {
            this._lastNameField.blur();
        } else if (fieldName ==="password") {
            this._passwordField.blur();
        } else if (fieldName ==="rePassword") {
            this._rePasswordField.blur();
        } else if (fieldName ==="email") {
            this._emailField.blur();
        }
    }

    async focusField(fieldName) {

        if (fieldName === "name"){
            this._nameField.focus();
        } else if (fieldName ==="lastName") {
            this._lastNameField.focus();
        } else if (fieldName ==="password") {
            this._passwordField.focus();
        } else if (fieldName ==="rePassword") {
            this._rePasswordField.focus();
        } else if (fieldName ==="email") {
            this._emailField.focus();
        }
    }
}

module.exports = SignUpForm;