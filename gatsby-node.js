const redirectJSON = require('./content/redirects.json');
const tracksJSON = require('./content/tracks.json');

exports.createPages = ({ graphql, actions }) => {
    const { createPage, createRedirect } = actions; //actions is collection of many actions - https://www.gatsbyjs.org/docs/actions

    tracksJSON.tracks.forEach(track => {
        const trackSlug = track.slug.split('/').pop();

        createPage({
            path: `/tracks/${trackSlug}`,
            component: require.resolve('./src/components/track.js'),
            context: {
                track
            }
        });
    });

    redirectJSON.redirects.forEach(redirect => {
        createRedirect({
            fromPath: redirect.from,
            toPath: redirect.to,
            isPermanent: true,
        });
    });
};
