// var util = require('util');
function ParserError(message, file, block, element, source, extra) {

    this.message = message;
    this.file = file;
    this.block = block;
    this.element = element;
    this.source = source;
    this.extra = extra || [];
}

/**
 * Inherit from Error
 */
// util.inherits(ParserError, Error);
ParserError.prototype = {};

/**
 * Exports
 */
module.exports = ParserError;
