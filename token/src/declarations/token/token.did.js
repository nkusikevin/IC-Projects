export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getSymbol' : IDL.Func([], [IDL.Text], ['query']),
    'getbalance' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
    'payOut' : IDL.Func([], [IDL.Text], []),
    'transfer' : IDL.Func([IDL.Principal, IDL.Nat], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
