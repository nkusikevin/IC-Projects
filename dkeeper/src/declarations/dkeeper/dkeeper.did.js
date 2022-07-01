export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createNote' : IDL.Func([IDL.Text, IDL.Text], [], ['oneway']),
  });
};
export const init = ({ IDL }) => { return []; };
