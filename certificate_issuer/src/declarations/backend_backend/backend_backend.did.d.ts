import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'create_course' : ActorMethod<[string, string], undefined>,
  'get_all_courses' : ActorMethod<[], Array<[string, string]>>,
  'get_all_students' : ActorMethod<[], Array<[string, string]>>,
  'get_certificate' : ActorMethod<[string], string>,
  'issue_certificate' : ActorMethod<[string, string], undefined>,
  'register_student' : ActorMethod<[string, string], undefined>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
