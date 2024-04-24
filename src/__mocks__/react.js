import * as React from 'react';

// Enzyme does not currently support React.memo
// Shim memo
// @see https://github.com/airbnb/enzyme/issues/1875
module.exports = { ...React, memo: x => x };
