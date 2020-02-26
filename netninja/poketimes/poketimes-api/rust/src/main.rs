#![feature(proc_macro_hygiene, decl_macro)]

#[macro_use] extern crate rocket;
#[macro_use] extern crate rocket_contrib;
#[macro_use] extern crate serde_derive;

use rocket_contrib::json::{Json, JsonValue};
mod post;
use post::{Post};

#[post("/", data = "<post>")]
fn create(post: Json<Post>) -> Json<Post> {
    post
}

#[get("/")]
fn read() -> JsonValue {
    json!({ "content": "Hi Jeff" })
}

#[put("/<id>", data = "<post>")]
fn update(id: i32, post: Json<Post>) -> Json<Post> {
    post
}

#[delete("/<id>")]
fn delete(id: i32) -> JsonValue {
    json!({"status": "ok"})
}

fn main() {
    rocket::ignite()
        .mount("/post", routes![create, update, delete])
        .mount("/posts", routes![read])
        .launch();
}