module.exports = function (grunt) {

    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Define the configuration for all the tasks
    grunt.initConfig({
        clean: {
            dist: [
                'dist/*'
            ]
        },

        gitPull: {
            x3dom: {
                repos: [
                    {
                        path: ['upstream'],
                        repo: 'https://github.com/x3dom/x3dom.git'
                    },
                ]
            }
        },
        shell: {
            build: {
                command: [
                    'cd ./upstream/x3dom',
                    'python manage.py --build'
                ].join('&&')
            }
        },
        umd: {
            dist: {
                options: {
                    src: 'upstream/x3dom/dist/x3dom.js',
                    dest: 'dist/x3dom.js',

                    objectToExport: 'x3dom',
                    amdModuleId: 'x3dom'
                }
            }
        },
        copy: {
            styles: {
                cwd: 'upstream/x3dom/dist/',
                src: 'x3dom.css',
                expand: true,
                dest: 'dist/'
            }
        },
        bump: {
            options: {
              commit: true,
              commitMessage: 'Release v%VERSION%',
              commitFiles: [ 'package.json', 'dist/*' ],
              createTag: true,
              tagName: 'v%VERSION%',
              tagMessage: 'Version %VERSION%',
              prereleaseName: 'dev',
              push: true,
              pushTo: 'origin'
            }
        }
    });

    grunt.registerTask('bundle', [
        'clean:dist',
        'gitPull:x3dom',
        'shell:build',
        'umd:dist',
        'copy:styles'
    ]);

    grunt.registerTask('release', [
        'bundle',
        'bump:prerelease'
    ]);
};
