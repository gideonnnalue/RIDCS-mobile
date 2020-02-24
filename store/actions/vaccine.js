import {insertChildVaccine} from '../../helper/db';

export const addChildVaccine = (id, data) => async dispatch => {
  try {
    const newData = Object.keys(data).map((name, i) => {
      return {name, ...data[name]};
    });
    console.log(newData);
    const taken = newData[0].taken ? 'yes' : 'no';
    const refused = newData[0].refused ? 'yes' : 'no';
    const dbResults = await insertChildVaccine(
      newData[0].name,
      newData[0].text,
      taken,
      refused,
      newData[0].remark,
      id.toString(),
    );
    console.log(dbResults);
  } catch (err) {
    console.log(err);
  }
};
