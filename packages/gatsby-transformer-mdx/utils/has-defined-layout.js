module.exports = code => (typeof code === 'string' ? /^export default /m.test(code) : false);
