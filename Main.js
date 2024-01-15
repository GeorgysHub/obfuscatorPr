/*function execute() {
    require('./src/AddVariables.js');
    require('./src/DeleteComments.js');
    require('./src/Name.js');
    require('./src/Semi.js');
    require('./src/DeleteSpaces.js');
}
  execute(); */
  function execute() {
    const operations = [
        './src/AddVariables.js',
        './src/DeleteComments.js',
        './src/Name.js',
        './src/Semi.js',
        './src/DeleteSpaces.js'
    ];

    operations.forEach(operation => require(operation));
}

execute();