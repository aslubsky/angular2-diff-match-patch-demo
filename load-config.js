(function (global) {
    var config = {
        defaultJSExtensions: true,
        paths: {
            'npm:': 'node_modules/'
        },
        map: {
            'app': 'build/app/main',

            // angular bundles
            '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
            '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
            '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
            '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
            '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
            '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
            '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
            '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

            // other libraries
            'rxjs': 'npm:rxjs',
            'angular2-diff-match-patch': 'npm:angular2-diff-match-patch',
            'google-diff-match-patch': 'npm:google-diff-match-patch'
        },
        packages: {
            'angular2-diff-match-patch': {
                main: 'dist/angular2-diff-match-patch.js'
            },
            'google-diff-match-patch': {
                main: 'diff_match_patch_uncompressed.js',
            }
        },
        meta: {
            'app': {
                deps: [
                    'google-diff-match-patch'
                ]
            }
        }
    };

    if (global.filterSystemConfig) {
        global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
