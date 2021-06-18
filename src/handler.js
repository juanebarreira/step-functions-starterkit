/* eslint-disable no-console */
exports.randomIntInMsgTask = (event, context, callback) => {
  const result = { Status: 'Ok', Message: 'First task correctly done', number: Math.random() };
  console.log('randomIntInMsgTask invocation');
  callback(null, result);
};
exports.isGreater = (event, context, callback) => {
  const result = { Status: 'Ok', Message: 'The number ' + event.number + ' was greater than 0.5' };
  console.log('isGreater invocation');
  callback(null, result);
};
exports.isLower = (event, context, callback) => {
  const result = { Status: 'Ok', Message: 'The number ' + event.number + ' was lower than 0.5' };
  console.log('isLower invocation');
  callback(null, result);
};
