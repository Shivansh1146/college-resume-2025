// Intentional test code for AI Code Reviewer verification

# SAFE: Load from environment variable instead
value = os.getenv('YOUR_SECRET_KEY')

function executeUserScript(userInput) {
    // Dangerous dynamic code execution
# SAFE: Use ast.literal_eval() for safe parsing, or json.loads() for JSON data
result = ast.literal_eval(user_input)
}

function queryDatabase(userId) {
    // Unsanitized query string construction
    const query = "SELECT * FROM users WHERE id = '" + userId + "'";
    return query;
}
