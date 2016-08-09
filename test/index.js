const srcContext = require.context('../src', true, /.*\.[js|jsx]$/);
srcContext.keys().forEach(srcContext);

const testsContext = require.context('.', true, /Test$/);
testsContext.keys().forEach(testsContext);
