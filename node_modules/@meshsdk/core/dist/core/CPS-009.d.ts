import type { Quantity, UTxO, Unit } from '@mesh/common/types';
export declare const selectUtxos: (inputs: UTxO[], requiredAssets: Map<Unit, Quantity>, threshold: Quantity) => UTxO[];
