"use strict";
// Desc: Constants for HTTP Methods, Status Codes and other HTTP related constants
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP_STATUS_INTERNAL_SERVER_ERROR = exports.INVALID_INPUT = exports.HTTP_STATUS_BAD_REQUEST = exports.TEXT_METHOD_NOT_ALLOWED = exports.HTTP_STATUS_METHOD_NOT_ALLOWED = exports.HTTP_STATUS_NO_CONTENT = exports.HTTP_STATUS_OK = exports.HTTP_METHOD_OPTIONS = exports.HTTP_METHOD_POST = exports.HTTP_METHOD_GET = void 0;
// HTTP Methods
exports.HTTP_METHOD_GET = 'GET';
exports.HTTP_METHOD_POST = 'POST';
exports.HTTP_METHOD_OPTIONS = 'OPTIONS';
// SUCCESS
exports.HTTP_STATUS_OK = 200;
exports.HTTP_STATUS_NO_CONTENT = 204;
// ERROR
exports.HTTP_STATUS_METHOD_NOT_ALLOWED = 405;
exports.TEXT_METHOD_NOT_ALLOWED = "Method not allowed";
exports.HTTP_STATUS_BAD_REQUEST = 400;
exports.INVALID_INPUT = "Invalid input parameters";
exports.HTTP_STATUS_INTERNAL_SERVER_ERROR = 500;
