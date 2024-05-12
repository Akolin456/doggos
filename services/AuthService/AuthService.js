// import fetch from "node-fetch";

const userServiceUrl =
  "https://7fkgoc5qr4.execute-api.ap-south-1.amazonaws.com/DEV/user-service";
let verboseLog = true;

/**
 * Sign in as a user and get back JWT token.
 * Status Code meanings : <br>
 *     200 :- Generated JWT Token successfully <br>
 *     403 :- Invalid Credentials <br>
 *     404 :- User not found <br>
 *     400 :- Invalid Payload <br>
 * @param email Email of the user logging in
 * @param password Password of the user Logging in
 * @return JWT Token of the user. Will throw exception upon failure
 */
export async function SignInFunction(email, password) {
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
      500 :- Something is Wrong in the Backend
       */

  // Prepare the payload
  const payload = JSON.stringify({
    userId: email,
    password: password,
  });

  Log(`Payload is ${payload}`);

  // Call User Service with a timeout of 30 seconds
  const resp = await fetchWithTimeout(userServiceUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  // Throw exception conditionally if status code is not 200
  if (resp.status !== 200) {
    Log(`Response Status Code is not 200. It's ${resp.status}`);

    return {
      statusCode: resp.status,
    };
  }

  const respBody = await resp.json();
  Log(`Response Body Dict is ${respBody}`);
  const token = respBody.data;
  return {
    statusCode: 200,
    token: token,
  };
}

/**
 * Sign up a user. Throws exception if failed. If user Registered Successfully the function will execute without any exception
 * @param email Email To Register
 * @param password Password To Register
 * @return {Promise<void>}
 */
export async function SignUp(email, password) {
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
      500 :- Something is Wrong in the Backend
       */

  // Prepare the payload
  const payload = JSON.stringify({
    userId: email,
    password: password,
  });

  Log(`Payload is ${payload}`);

  // Call User Service with a timeout of 30 seconds
  const resp = await fetchWithTimeout(userServiceUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  });

  // Throw exception conditionally if status code is not 200
  if (resp.status !== 200) {
    Log(`Response Status Code is not 200. It's ${resp.status}`);

    return {
      statusCode: resp.status,
    };
  }

  const respBody = await resp.json();
  Log(`Response Body Dict is ${respBody}`);
  const token = respBody.data;
  return {
    statusCode: 200,
    token: token,
  };
}

/**
 * Get directory contents based on the provided path.
 * @param {string} path The path for which directory contents are requested.
 * @returns {Promise<object>} A Promise that resolves to the directory contents.
 */
export async function getDirectory(path) {
    Log(`Getting directory for path: ${path}`);

    // Prepare the payload
    const payload = JSON.stringify({
        action: "Directory.GetDirectory",
        path: [path],
    });

    Log(`Payload is ${payload}`);

    try {
        // Call the directory service with a timeout of 30 seconds
        const resp = await fetchWithTimeout("https://pow5vvmrk6xkspj63ypuuxvttm0xzmwc.lambda-url.ap-south-1.on.aws/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: payload,
        });

        // Throw exception conditionally if status code is not 200
        if (resp.status !== 200) {
            Log(`Response Status Code is not 200. It's ${resp.status}`);
            return {
                statusCode: resp.status,
            };
        }

        // Parse response body as JSON
        const respBody = await resp.json();
        Log(`Response Body is ${JSON.stringify(respBody)}`);

        return respBody;
    } catch (error) {
        Log(`Error occurred: ${error.message}`);
        throw error;
    }
}

async function fetchWithTimeout(url, options, timeout = 30000) {
  return Promise.race([
    fetch(url, options),
    new Promise((_, reject) =>
      setTimeout(() => reject(new Error("Request timed out")), timeout)
    ),
  ]);
}

function Log(String) {
  if (verboseLog) {
    console.log(String);
  }
}
