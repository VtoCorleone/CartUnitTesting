// Karma configuration
// Generated on Tue Jan 28 2014 10:33:36 GMT-0800 (Pacific Standard Time)

module.exports = function (config) {

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',


        // frameworks to use
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            // this is being overriden in the Gruntfile.js
            'app/libraries/angular/angular.min.js',
            'app/libraries/angular-mocks/angular-mocks.js',
            'app/libraries/lodash/dist/lodash.min.js',

            'app/book/bookApp.js',
            'app/book/bookCtrl.js',
            'app/book/bookSvc.js',

            'test/book/bookCtrlSpec.js',
            'test/book/bookSvcSpec.js'
        ],


        // list of files to exclude
        exclude: [

        ],


        // test results reporter to use
        // only generates logs on error
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress'],//, 'junit', 'html'],


        // creates a .html file when the test fails
        htmlReporter: {
            outputFile: 'test/errorLog/TestResults.html'
        },


        // creates a .xml file when the test fails
        junitReporter: {
            outputFile: 'test/errorLog/TestResults.xml',
            suite: ''
        },


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_DEBUG,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],//, 'Firefox', 'IE'],


        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false
    });
};
