use std::collections::HashMap;
use ic_cdk::update;
use std::cell::RefCell;

#[derive(Default)]
struct University {
    students: HashMap<String, String>,
    courses: HashMap<String, String>,
    certificates: HashMap<String, String>,
}

thread_local! {
    static UNIVERSITY: RefCell<University> = RefCell::new(University::default());
}

#[update]
fn register_student(name: String, email: String) {
    UNIVERSITY.with(|u| {
        u.borrow_mut().students.insert(name, email);
    });
}

#[update]
fn create_course(course_name: String, description: String) {
    UNIVERSITY.with(|u| {
        u.borrow_mut().courses.insert(course_name, description);
    });
}

#[update]
fn issue_certificate(name: String, course: String) {
    let cert = format!("Certificate: {} completed {}", name, course);
    UNIVERSITY.with(|u| {
        u.borrow_mut().certificates.insert(name, cert);
    });
}

#[update]
fn get_certificate(name: String) -> String {
    UNIVERSITY.with(|u| {
        u.borrow().certificates
            .get(&name)
            .cloned()
            .unwrap_or_else(|| "Not found".to_string())
    })
}
