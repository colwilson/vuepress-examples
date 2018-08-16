const loaderUtils = require('loader-utils')
const schemaUtils = require('schema-utils')

const schema = {
  type: 'object',
  properties: {
    test: {
      type: 'string'
    }
  }
};

module.exports = function(source) {
  const options = loaderUtils.getOptions(this);

  // schemaUtils.validateOptions(schema, options, 'Example Loader');
  console.log(source)

  // Apply some transformations to the source...

  return source //`export default ${ JSON.stringify(source) }`;
}