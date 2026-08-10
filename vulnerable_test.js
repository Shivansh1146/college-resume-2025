// Intentional test code for AI Code Reviewer verification

const HARDCODED_JWT_SECRET = "super_secret_jwt_key_1234567890_do_not_commit";

function executeUserScript(userInput) {
    // Dangerous dynamic code execution
    eval(userInput);
}

function queryDatabase(userId) {
    // Unsanitized query string construction
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    return query;
}
