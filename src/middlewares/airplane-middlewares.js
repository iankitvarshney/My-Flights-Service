const { StatusCodes } = require("http-status-codes");

const { ErrorResponse } = require("../utils/common");
const AppError = require("../utils/errors/app-error");

function validateCreateRequest(req, res, next) {
  if (!req.body.modelNumber || !req.body.capacity) {
    let explanation = [];
    if (!req.body.modelNumber) {
      explanation.push(
        "Model Number not found in the incoming request in the correct form"
      );
    }
    if (!req.body.capacity) {
      explanation.push(
        "Capacity value not found in the incoming request in the correct form"
      );
    }
    ErrorResponse.message = "Something went wrong while creating airplane";
    ErrorResponse.error = new AppError(explanation, StatusCodes.BAD_REQUEST);
    return res.status(StatusCodes.BAD_REQUEST).json(ErrorResponse);
  }
  next();
}

module.exports = {
  validateCreateRequest,
};
