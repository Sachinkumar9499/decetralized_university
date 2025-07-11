export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'create_course' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'get_all_courses' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        [],
      ),
    'get_all_students' : IDL.Func(
        [],
        [IDL.Vec(IDL.Tuple(IDL.Text, IDL.Text))],
        [],
      ),
    'get_certificate' : IDL.Func([IDL.Text], [IDL.Text], []),
    'issue_certificate' : IDL.Func([IDL.Text, IDL.Text], [], []),
    'register_student' : IDL.Func([IDL.Text, IDL.Text], [], []),
  });
};
export const init = ({ IDL }) => { return []; };
