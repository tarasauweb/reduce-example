const arrayForExample = [
  {
    mark: 'BMW',
    model: '5',
    engine: '3.0d',
    info:{
        mileage: 123500,
        year: 2013,
        typeEngine : 'disel'
    }
  },
  {
    mark: 'Lexus',
    model: 'GS',
    engine: '3.0',
    info:{
        mileage: 90000,
        year: 2017,
        typeEngine : 'gas'
    }
  },
  {
    mark: 'Honda',
    model: 'Accord',
    engine: '2.4',
    info:{
        mileage: 180000,
        year: 2019,
        typeEngine : 'gas'
    }
  },
];
const arrayWithOutInfo = arrayForExample.map(item => {
  return Object.keys(item).filter(key => key !== 'info').reduce((res, key) => {
    res[key] = item[key];
    return res;
  },{})
});