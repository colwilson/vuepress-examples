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
  // https://webpack.js.org/api/loaders
  const options = loaderUtils.getOptions(this);

  // schemaUtils.validateOptions(schema, options, 'Example Loader');
  console.log(this.resourcePath)
  // console.log(this.context)
  // console.log(this.rootContext)
  console.log(this.context.replace(this.rootContext, ''));
  
  console.log('--------------------------------------------')

  // Apply some transformations to the source...

  return source //`export default ${ JSON.stringify(source) }`;
}