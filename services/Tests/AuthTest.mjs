import assert from "assert";
import {SignIn} from "../AuthService/AuthService.mjs";

describe('AuthService Sign In Test', () => {
    it('Does Sign-In return a JWT?', async function () {
        const Token = await SignIn("test", "test")
        console.log(`Token is ${Token}`);
        assert.notEqual(Token, null);
    });
})