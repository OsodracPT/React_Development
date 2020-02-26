#[derive(Serialize, Deserialize)]
pub struct Post {
    pub id: Option<i32>,
    pub user_id: i32,
    pub title: String,
    pub body: String,
}