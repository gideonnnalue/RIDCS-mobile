import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({name: 'TestDB.db'});

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS care_giver (id INTEGER PRIMARY KEY NOT NULL, firstName TEXT NOT NULL, middleName TEXT NOT NULL, lastName TEXT NOT NULL); CREATE TABLE IF NOT EXISTS health_facility (id INTEGER PRIMARY KEY NOT NULL, name TEXT NOT NULL, type TEXT NOT NULL, userName TEXT NOT NULL, password TEXT NOT NULL, ward TEXT NOT NULL, lga TEXT NOT NULL, state TEXT NOT NULL); CREATE TABLE IF NOT EXISTS child (id INTEGER PRIMARY KEY NOT NULL, cardNo TEXT NOT NULL, firstName TEXT NOT NULL, middleName TEXT NOT NULL, lastName TEXT NOT NULL, careFacilityId TEXT NOT NULL, careGiverId TEXT NOT NULL)',
        [],
        () => {
          resolve();
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertHealthFacility = (
  name,
  type,
  userName,
  password,
  ward,
  lga,
  state,
) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO health_facility (name, type, userName, password, ward, lga, state) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [(name, type, userName, password, ward, lga, state)],
        (_, res) => {
          resolve(res);
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};
