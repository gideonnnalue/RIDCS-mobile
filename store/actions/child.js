import {
  insertChildRecord,
  fetchChildRecords,
  selectChildRecord,
  insertChildVaccine,
  selectChildVaccine,
} from '../../helper/db';
import {ADD_CHILD, SET_CHILD_RECORDS, SET_VACCINES} from './actionTypes';
import moment from 'moment';

export const addChild = data => async dispatch => {
  const newData = data;
  delete newData.showDate;
  const {
    childFirstName,
    childMiddleName,
    childLastName,
    childPos,
    childSex,
    dob,
    childWeight,
    houseNo,
    villageSettle,
    townCity,
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
  } = newData;
  try {
    const dbResults = await insertChildRecord(
      childFirstName,
      childMiddleName,
      childLastName,
      childPos,
      childSex,
      dob,
      childWeight,
      houseNo,
      villageSettle,
      townCity,
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
    );
    dispatch(loadChildRecords());
  } catch (err) {
    console.log(err);
  }
  // dispatch({type: ADD_CHILD, payload: data});
};

export const loadChildRecords = () => async dispatch => {
  try {
    const dbResults = await fetchChildRecords();
    let len = dbResults.rows.length;
    const allRecords = [];
    for (let i = 0; i < len; i++) {
      const row = dbResults.rows.item(i);
      allRecords.push(row);
    }
    dispatch({type: SET_CHILD_RECORDS, payload: allRecords});
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const getChildRecord = id => async dispatch => {
  try {
    const dbResults = await selectChildRecord(id);
    let len = dbResults.rows.length;
    let data;
    if (len > 0) {
      for (let i = 0; i < len; i++) {
        data = dbResults.rows.item(0);
      }
      return data;
    } else {
      throw new Error('Data unavailable');
    }
  } catch (err) {
    throw err;
  }
};

export const addChildVaccine = (id, data) => async dispatch => {
  try {
    let newData = [];
    const today = moment().format('L');
    Object.keys(data).forEach((name, i) => {
      if (data[name].taken) {
        newData.push({
          name: name,
          date: today,
          id: id.toString(),
        });
      }
    });

    let finalData;

    if (newData.length > 0) {
      const promises = newData.map(async (el, i) => {
        let dbResults;
        try {
          dbResults = await insertChildVaccine(el);
        } catch (err) {
          throw err;
        }
        return dbResults;
      });

      finalData = await Promise.all(promises);
    }

    dispatch(loadChildRecords());
    dispatch(loadChildTally());
  } catch (err) {
    console.log(err);
  }
};

export const loadChildTally = () => async dispatch => {
  const today = moment().format('L');
  const vaccines = ['hbv', 'opv', 'bcg', 'opv1', 'penta1', 'rota1'];
  try {
    // const data = await selectChildVaccine('hbv', today.toString());
    // console.log(data);
    let finalData;
    const promises = vaccines.map(async (el, i) => {
      let data;
      try {
        data = await selectChildVaccine(el, today.toString());
      } catch (err) {
        console.log(err);
      }
      data.vaccine = el;
      return data;
    });
    finalData = await Promise.all(promises);

    let vaccineData = [];
    finalData.forEach(el => {
      vaccineData.push({
        vaccineName: el.vaccine,
        vaccineLength: el.rows.length,
      });
    });
    // console.log(vaccineData);
    dispatch({type: SET_VACCINES, payload: vaccineData});
  } catch (err) {
    console.log(err);
    throw err;
  }
};
