const SIGNUP_FORM_ERRORS = {
    SIGNUP_EMPTY_NAME_ERROR: 'Name required',
    SIGNUP_WRONG_NAME_ERROR: 'Name is invalid',
    SIGNUP_WRONG_LENGTH_NAME_ERROR: 'Name has to be from 2 to 20 characters long',

    SIGNUP_EMPTY_LASTNAME_ERROR: 'Last name required',
    SIGNUP_WRONG_LASTNAME_ERROR: 'Last name is invalid',
    SIGNUP_WRONG_LENGTH_LASTNAME_ERROR: 'Last name has to be from 2 to 20 characters long',

    SIGNUP_WRONG_EMAIL_ERROR: 'Email is incorrect',
    SIGNUP_EMPTY_EMAIL_ERROR: 'Email required',

    SIGNUP_WRONG_PASSSWORD_ERROR: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
    SIGNUP_EMPTY_PASSWORD_ERROR: 'Password required',

    SIGNUP_WRONG_REPASSSWORD_ERROR: 'Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter',
    SIGNUP_EMPTY_REPASSWORD_ERROR: 'Re-enter password required',
    SIGNUP_NOT_MATCH_REPASSWORD_ERROR: 'Passwords do not match',
    
}

module.exports = SIGNUP_FORM_ERRORS;