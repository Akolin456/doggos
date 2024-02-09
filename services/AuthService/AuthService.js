const fetch = require("node-fetch");
const InvalidCredentialException = require("../Models/ExceptionModels/InvalidCrednetialException");
const UserNotFoundException = require("../Models/ExceptionModels/UserNotFoundException");
const InvalidPayloadException = require("../Models/ExceptionModels/InvalidPayloadException");

const userServiceUrl = "https://7fkgoc5qr4.execute-api.ap-south-1.amazonaws.com/DEV/user-service";


/**
 * Sign in as a user and get back JWT token.
 * @param email Email of the user logging in
 * @param password Password of the user Logging in
 * @return JWT Token of the user. Will throw exception upon failure
 */
async function SignIn(email, password) {
    /*
    Expected Payload
    {
    "userId":"test",
    "password":"test"
    }
    Response Structure :
    {"msg":"USER SERVICE : Generated JWT Token with userId as Claim","data":"Generated Token"}
    Status Code meanings :
    200 :- Generated JWT Token successfully
    403 :- Invalid Credentials
    404 :- User not found
    400 :- Invalid Payload
     */

    //Prepare the payload
    const payload = JSON.stringify({
        userId: email, password: password
    });

    //Call User Service
    const resp = await fetch(userServiceUrl, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: payload
    })

    //Throw exception conditionally if status code is not 200
    if (resp.status !== 200) {
        switch (resp.status) {
            case 403 :
                throw new InvalidCredentialException("Credentials are invalid");
            case 404 :
                throw new UserNotFoundException("User not found");
            case 400 :
                throw new InvalidPayloadException(`Invalid Payload. The payload ${payload} is invalid`);
            default:
                throw new Error(`Status Code for Sign-In was ${resp.status}`)
        }
    }

    const respBody = await resp.json();
    const token = respBody.data;

    //Throw exception if Token is Null or Empty
    if (!token || token === "") {
        throw new Error("JWT Token from Response was Empty");
    }

}

module.exports = {
    SignIn
}