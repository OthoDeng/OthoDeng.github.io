import type { Node } from "unist-util-visit";
export declare const remarkPathPlugin: ({ pathPrefix }: {
    pathPrefix: string;
}) => (markdownAST: Node) => Promise<Node>;
