import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'getSymbol' : () => Promise<string>,
  'getbalance' : (arg_0: Principal) => Promise<bigint>,
  'payOut' : () => Promise<string>,
}
