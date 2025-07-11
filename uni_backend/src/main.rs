#[macro_use] extern crate rocket;

use rocket::serde::{json::Json, Deserialize, Serialize};
use std::sync::Mutex;

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Student {
    name: String,
    email: String,
    password: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Course {
    title: String,
    description: String,
}

#[derive(Debug, Clone, Serialize, Deserialize)]
struct Grade {
    student_email: String,
    course_title: String,
    grade: String,
}


#[post("/register", format = "json", data = "<student>")]
fn register(
    student: Json<Student>,
    state: &rocket::State<Mutex<Vec<Student>>>,
) -> &'static str {
    println!("🔔 New student: {:?}", student);
    let mut students = state.lock().unwrap();
    students.push(student.into_inner());
    "Student registered successfully"
}

#[post("/courses", format = "json", data = "<course>")]
fn create_course(
    course: Json<Course>,
    state: &rocket::State<Mutex<Vec<Course>>>,
) -> &'static str {
    println!("📝 New course: {:?}", course);
    let mut courses = state.lock().unwrap();
    courses.push(course.into_inner());
    "Course created successfully"
}

#[post("/grades", format = "json", data = "<grade>")]
fn assign_grade(
    grade: Json<Grade>,
    state: &rocket::State<Mutex<Vec<Grade>>>,
) -> &'static str {
    println!("🧾 Grade assigned: {:?}", grade);
    let mut grades = state.lock().unwrap();
    grades.push(grade.into_inner());
    "Grade assigned successfully"
}


#[get("/")]
fn index() -> &'static str {
    "📚 Welcome to Decentralized Autonomous University API"
}

#[launch]
fn rocket() -> _ {
    rocket::build()
        .manage(Mutex::new(Vec::<Student>::new()))
        .manage(Mutex::new(Vec::<Course>::new()))
        .manage(Mutex::new(Vec::<Grade>::new()))
        .mount("/", routes![index, register, create_course, assign_grade])

}
