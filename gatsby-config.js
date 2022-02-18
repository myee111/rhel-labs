module.exports = {
    pathPrefix: "/rhel-labs",
    siteMetadata: {
        title: `Red Hat Enterprise Linux Hands-on Labs`,
        siteUrl: `https://rhel-labs.instruqt.com`,
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-mdx",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "pages",
                path: "./src/pages/",
            },
            __key: "pages",
        },
        "gatsby-plugin-meta-redirect",
    ],
};
