var ghPages = require('gh-pages');
var path = require('path');

ghPages.publish(path.join(__dirname, '../build'), {
        add: true // you leave /alerts and status.yml alone!
    }, err => {
        if (err) {
        console.error('Uh on! There was an error pushing the build to the gh-pages branch!');
        console.error(err);
    } else {
        console.log('Successfully pushed the build to the gh-pages branch.');

        // TODO: remove /build dir
    }
});
