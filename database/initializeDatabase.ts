import { type SQLiteDatabase } from 'expo-sqlite';
import * as FileSystem from 'expo-file-system';
// import * as sqlite3 from 'sqlite3';
// import { open } from 'sqlite';

export async function initDatabase(database: SQLiteDatabase) {
  await database.execAsync(`
  CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT UNIQUE NOT NULL,
        email TEXT UNIQUE NOT NULL,
        password TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL
    );

    CREATE TABLE IF NOT EXISTS videos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        title TEXT NOT NULL,
        description TEXT,
        url TEXT NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
    );

    CREATE TABLE IF NOT EXISTS favorites (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        user_id INTEGER,
        video_id INTEGER,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP NOT NULL,
        FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE,
        FOREIGN KEY (video_id) REFERENCES videos (id) ON DELETE CASCADE
    );

    `);
}


  
  // Call the function to perform the SELECT query
 // selectFromDatabase();

console.log(`sqlite/sqlite.ts ${FileSystem.documentDirectory}/SQLite/${initDatabase}`);

