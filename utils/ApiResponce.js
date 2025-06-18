class ApiResponse {
    constructor(message, data = null, success = true) {
        this.success = success;
        this.message = message;
        if (data !== null) {
        this.data = data;
        }
    }
}

module.exports = ApiResponse;
