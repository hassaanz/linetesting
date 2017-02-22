/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
    System.config({
        paths: {
            // paths serve as alias
            'npm:': '/libs/'
        },
        // map tells the System loader where to look for things
        map: {
            // our app is within the app folder
            'app': './Scripts',
            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
            '@angular/material': 'npm:@angular/material/bundles/material.umd.js',
            'ng2-material': 'npm:ng2-material',
            // other libraries
            'rxjs': 'npm:rxjs/',
            'angular2-in-memory-web-api': 'npm:angular2-in-memory-web-api',
            'ng2-auto-complete': 'npm:ng2-auto-complete/dist/',
            'ng2-datetime-picker': 'npm:ng2-datetime-picker/dist/',
            'immutable': 'npm:immutable/dist/'
        },
        // packages tells the System loader how to load when no filename and/or no extension
        packages: {
            app: {
                main: './main.js',
                defaultExtension: 'js'
            },
            rxjs: {
                main: '/Rx.js',
                defaultExtension: 'js'
            },
            'angular2-in-memory-web-api': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-material': {
                main: './index.js',
                defaultExtension: 'js'
            },
            'ng2-auto-complete': {
                main: 'ng2-auto-complete.umd.js',
                defaultExtension: 'js'
            },
            'ng2-datetime-picker': {
                main: 'ng2-datetime-picker.umd.js', 
                defaultExtension: 'js'
            },
            immutable: {
                main: 'immutable.js',
                defaultExtension: 'js'
            }
        }
    });
})(this);