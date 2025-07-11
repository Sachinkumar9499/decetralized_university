export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCertificate' : IDL.Func([IDL.Text], [IDL.Text], []),
    'issueCertificate' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
