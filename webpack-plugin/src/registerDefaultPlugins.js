/**
 * Registers the default plugins in case none were provided
 */

function registerDefaultPlugins(compiler) {
  let ReactPlugin = require('../../plugins/react/dist/plugin'); // eslint-disable-line global-require, max-len
  try {
    const reactPlugin = new ReactPlugin();
    reactPlugin.apply(compiler);
  } catch (err) {
    try {
      ReactPlugin = require('carte-blanche-react-plugin'); // eslint-disable-line global-require, import/no-unresolved, max-len
      const reactPlugin = new ReactPlugin();
      reactPlugin.apply(compiler);
    } catch (ex) {
      console.log('ERROR Installing default CarteBlanche plugins failed.', ex); // eslint-disable-line no-console,max-len
    }
  }
}

export default registerDefaultPlugins;
