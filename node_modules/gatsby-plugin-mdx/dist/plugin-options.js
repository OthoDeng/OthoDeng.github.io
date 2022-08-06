"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.enhanceMdxOptions = exports.defaultOptions = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

var _getSourcePluginsAsRemarkPlugins = require("./get-source-plugins-as-remark-plugins");

var _rehypeMetadataExtractor = _interopRequireDefault(require("./rehype-metadata-extractor"));

var _remarkMdxHtmlPlugin = require("./remark-mdx-html-plugin");

var _remarkPathPrefixPlugin = require("./remark-path-prefix-plugin");

const defaultOptions = pluginOptions => {
  const mdxOptions = {
    format: `mdx`,
    useDynamicImport: true,
    providerImportSource: `@mdx-js/react`,
    jsxRuntime: `classic`
  };
  const defaults = {
    extensions: [`.mdx`],
    mdxOptions
  };
  const options = (0, _deepmerge.default)(defaults, pluginOptions);
  return options;
};

exports.defaultOptions = defaultOptions;

const enhanceMdxOptions = async (pluginOptions, helpers) => {
  const options = defaultOptions(pluginOptions);

  if (!options.mdxOptions.remarkPlugins) {
    options.mdxOptions.remarkPlugins = [];
  } // Inject Gatsby path prefix if needed


  if (helpers.pathPrefix) {
    options.mdxOptions.remarkPlugins.push([_remarkPathPrefixPlugin.remarkPathPlugin, {
      pathPrefix: helpers.pathPrefix
    }]);
  } // Support gatsby-remark-* plugins


  if (options.gatsbyRemarkPlugins && Object.keys(options.gatsbyRemarkPlugins).length) {
    if (!options.mdxOptions.remarkPlugins) {
      options.mdxOptions.remarkPlugins = [];
    } // Parser plugins


    for (const plugin of options.gatsbyRemarkPlugins) {
      const requiredPlugin = plugin.module;

      if (typeof requiredPlugin.setParserPlugins === `function`) {
        for (const parserPlugin of requiredPlugin.setParserPlugins(plugin.options || {})) {
          if (Array.isArray(parserPlugin)) {
            const [parser, parserPluginOptions] = parserPlugin;
            options.mdxOptions.remarkPlugins.push([parser, parserPluginOptions]);
          } else {
            options.mdxOptions.remarkPlugins.push(parserPlugin);
          }
        }
      }
    } // Transformer plugins


    const gatsbyRemarkPlugins = await (0, _getSourcePluginsAsRemarkPlugins.getSourcePluginsAsRemarkPlugins)({
      gatsbyRemarkPlugins: options.gatsbyRemarkPlugins,
      ...helpers
    });

    if (gatsbyRemarkPlugins) {
      options.mdxOptions.remarkPlugins.push(...gatsbyRemarkPlugins);
    }
  }

  options.mdxOptions.remarkPlugins.push(_remarkMdxHtmlPlugin.remarkMdxHtmlPlugin);

  if (!options.mdxOptions.rehypePlugins) {
    options.mdxOptions.rehypePlugins = [];
  } // Extract metadata generated from by rehype-infer-* and similar plugins


  options.mdxOptions.rehypePlugins.push(_rehypeMetadataExtractor.default);
  return options.mdxOptions;
};

exports.enhanceMdxOptions = enhanceMdxOptions;