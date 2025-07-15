export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'createCourse' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'get_all_courses' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'name' : IDL.Text, 'description' : IDL.Text }))],
        [],
      ),
    'get_all_students' : IDL.Func(
        [],
        [IDL.Vec(IDL.Record({ 'name' : IDL.Text, 'email' : IDL.Text }))],
        [],
      ),
    'get_certificate' : IDL.Func([IDL.Text], [IDL.Text], []),
    'issueCertificate' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'register_student' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
