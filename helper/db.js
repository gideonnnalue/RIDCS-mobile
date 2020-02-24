import SQLite from 'react-native-sqlite-storage';

const database_name = 'RIDCS.db';
const database_version = '1.0';
const database_displayname = 'Polio app db';
const database_size = 200000;

SQLite.DEBUG(true);
const db = SQLite.openDatabase(
  database_name,
  database_version,
  database_displayname,
  database_size,
);

export const init = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS child_record (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT, middleName TEXT, lastName TEXT, position TEXT, gender TEXT, birthDate TEXT, weight TEXT, houseNo TEXT, settlement TEXT, city TEXT, ward TEXT, lga TEXT, state TEXT, motherName TEXT, motherNo TEXT, fatherName TEXT, fatherNo TEXT, careGiverFirstName TEXT, careGiverMiddleName TEXT, careGiverLastName TEXT, careGiverNo TEXT, hbv TEXT, opv TEXT, bcg TEXT, opv1 TEXT, penta1 TEXT, rota1 TEXT);',
        [],
        () => {
          resolve();
          // tx.executeSql(
          //   'CREATE TABLE IF NOT EXISTS vaccine_record (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, batchNo TEXT, taken TEXT, refused TEXT, remark TEXT, childId TEXT);',
          //   [],
          //   () => {
          //     resolve();
          //   },
          //   (_, err) => {
          //     reject(err);
          //   },
          // );
        },
        (_, err) => {
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const insertChildRecord = (
  firstName,
  middleName,
  lastName,
  position,
  gender,
  birthDate,
  weight,
  houseNo,
  settlement,
  city,
  ward,
  lga,
  state,
  motherName,
  motherNo,
  fatherName,
  fatherNo,
  careGiverFirstName,
  careGiverMiddleName,
  careGiverLastName,
  careGiverNo,
) => {
  console.log('entering insertChildRecord');
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO child_record (firstName, middleName, lastName, position, gender, birthDate, weight, houseNo, settlement, city, ward, lga, state, motherName, motherNo, fatherName, fatherNo, careGiverFirstName, careGiverMiddleName, careGiverLastName, careGiverNo) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
        [
          firstName,
          middleName,
          lastName,
          position,
          gender,
          birthDate,
          weight,
          houseNo,
          settlement,
          city,
          ward,
          lga,
          state,
          motherName,
          motherNo,
          fatherName,
          fatherNo,
          careGiverFirstName,
          careGiverMiddleName,
          careGiverLastName,
          careGiverNo,
        ],
        (_, res) => {
          console.log('inserted ChildRecord');
          console.log(res);
          resolve(res);
        },
        (_, err) => {
          console.log(err);
          console.log('insert child record failed');
          reject(err);
        },
      );
    });
  });
  return promise;
};

export const fetchChildRecords = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM child_record',
        [],
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

export const selectChildRecord = id => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM child_record WHERE id = ?',
        [id],
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

export const selectChildVaccine = (type, date) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `SELECT * FROM child_record WHERE ${type} = ?`,
        [date],
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

export const dropChldRecordsTable = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        'DROP TABLE child_record',
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

export const insertChildVaccine = vaccinne => {
  const vaccineDate = vaccinne.date.toString();
  const vaccineName = vaccinne.name;
  const childId = vaccinne.id;
  const promise = new Promise((resolve, reject) => {
    db.transaction(tx => {
      tx.executeSql(
        `UPDATE child_record SET ${vaccineName} = ? WHERE id = ?`,
        [vaccineDate, childId],
        (_, res) => {
          console.log('passed');
          resolve(res);
        },
        (_, err) => {
          console.log('failed');
          reject(err);
        },
      );
    });
  });
  return promise;
};
