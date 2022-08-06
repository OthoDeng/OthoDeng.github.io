import type { ProcessorOptions } from "@mdx-js/mdx";
import type { GatsbyCache, NodePluginArgs, PluginOptions } from "gatsby";
import type { IPluginRefObject } from "gatsby-plugin-utils/types";
export interface IMdxPluginOptions {
    extensions: [string];
    mdxOptions: ProcessorOptions;
    gatsbyRemarkPlugins?: [IPluginRefObject];
}
interface IHelpers {
    getNode: NodePluginArgs["getNode"];
    getNodesByType: NodePluginArgs["getNodesByType"];
    pathPrefix: NodePluginArgs["pathPrefix"];
    reporter: NodePluginArgs["reporter"];
    cache: GatsbyCache;
}
declare type MdxDefaultOptions = (pluginOptions: PluginOptions) => IMdxPluginOptions;
export declare const defaultOptions: MdxDefaultOptions;
declare type EnhanceMdxOptions = (pluginOptions: PluginOptions, helpers: IHelpers) => Promise<ProcessorOptions>;
export declare const enhanceMdxOptions: EnhanceMdxOptions;
export {};
