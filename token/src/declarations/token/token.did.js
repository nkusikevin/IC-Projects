export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getbalnce' : IDL.Func([IDL.Principal], [IDL.Nat], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
