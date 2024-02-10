import sql from "better-sqlite3";
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //run() -> Run would be used if you were inserting data,for example, if you were changing data,
  //all() ->all is used if you are fetching data and you want to get back all the rows that are fetched by that statement.
  return db.prepare("SELECT * FROM meals").all();
}
