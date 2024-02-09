import fetch from "node-fetch";
import InvalidCredentialException from "../Models/ExceptionModels/InvalidCrednetialException.mjs";
import UserNotFoundException from "../Models/ExceptionModels/UserNotFoundException.mjs";
import InvalidPayloadException from "../Models/ExceptionModels/InvalidPayloadException.mjs";

const userServiceUrl = "https://7fkgoc5qr4.execute-api.ap-south-1.amazonaws.com/DEV/user-service";
let verboseLog = true;

/**
 * Sign in as a user and get back JWT token.
 * @param email Email of the user logging in
 * @param password Password of the user Logging in
 * @return JWT Token of the user. Will throw exception upon failure
 */
export async function SignIn(email, password) {
    Log(`Sign In called for ${email} ${password}`);
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

    Log(`Payload is ${payload}`);

    //Call User Service
    const resp = await fetch(userServiceUrl, {
        method: "POST", headers: {
            "Content-Type": "application/json"
        }, body: payload, timeout: 30000
    })

    //Throw exception conditionally if status code is not 200
    if (resp.status !== 200) {
        Log(`Response Status Code is not 200. It's ${resp.status}`)
        Log(`Response Status Code is not 200. It's Body is ${resp.body.toString()}`)
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
    Log(`Response Body Dict is ${respBody}`)
    const token = respBody.data;

    //Throw exception if Token is Null or Empty
    if (!token || token === "") {
        throw new Error("JWT Token from Response was Empty");
    }
    return token;
}

function Log(String) {
    if (verboseLog) {
        console.log(String);
    }
}


