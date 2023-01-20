import { IGatsbyState, IGatsbyPage } from "../redux/types";
interface IGatsbyPageComponent {
    componentPath: string;
    componentChunkName: string;
}
export declare const resetLastHash: () => void;
export declare const getComponents: (pages: Array<IGatsbyPage>, slices: IGatsbyState["slices"]) => Array<IGatsbyPageComponent>;
export declare const writeAll: (state: IGatsbyState) => Promise<boolean>;
export declare const startListener: () => void;
export {};
