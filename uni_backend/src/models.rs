use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize, Clone)]
pub struct Student {
    pub name: String,
    pub email: String,
    pub password: String,
}