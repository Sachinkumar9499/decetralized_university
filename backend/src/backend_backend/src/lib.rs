use candid::{CandidType, Principal};
use serde::{Deserialize, Serialize};
use ic_cdk::api::caller;
use ic_cdk_macros::{update, query};
use std::collections::HashMap;
use std::cell::RefCell;



// ✅ Define Student and Course structs with required derives
#[derive(Clone, Debug, CandidType, Serialize, Deserialize)]
struct Student {
    id: String,
    name: String,
    email: String,
}

#[derive(Clone, Debug, CandidType, Serialize, Deserialize)]
struct Course {
    name: String,
    description: String,
}

#[derive(Default)]
struct University {
    students: HashMap<Principal, Student>,
    courses: HashMap<String, Course>,
    certificates: HashMap<(String, String), String>, // (student, course) => cert hash
}

thread_local! {
    static UNIVERSITY: RefCell<University> = RefCell::new(University::default());
}

#[update]
fn register_student(name: String, email: String) {
    let caller_id = caller();
    let student = Student {
        id: caller_id.to_text(),
        name,
        email, 
    };

    UNIVERSITY.with(|u| {
        u.borrow_mut().students.insert(caller_id, student);
    });
}

#[update(name = "createCourse")]
fn create_course(name: String, description: String) {
    let course = Course { name: name.clone(), description };
    UNIVERSITY.with(|u| {
        u.borrow_mut().courses.insert(name, course);
    });
}

#[update(name = "issueCertificate")]
fn issue_certificate(name: String, course: String) {
    let certificate = format!("Certificate for {} in {}", name, course);
    UNIVERSITY.with(|u| {
        u.borrow_mut().certificates.insert((name, course), certificate);
    });
}

#[query(name = "getCertificate")]
fn get_certificate(name: String, course: String) -> Option<String> {
    UNIVERSITY.with(|u| {
        u.borrow().certificates.get(&(name, course)).cloned()
    })
}

#[query(name = "get_all_students")]
fn get_all_students() -> Vec<Student> {
    UNIVERSITY.with(|u| {
        u.borrow().students.values().cloned().collect()
    })
}

#[query(name = "get_all_courses")]
fn get_all_courses() -> Vec<Course> {
    UNIVERSITY.with(|u| {
        u.borrow().courses.values().cloned().collect()
    })
}
