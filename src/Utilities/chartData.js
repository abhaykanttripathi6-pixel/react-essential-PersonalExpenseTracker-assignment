import React from 'react'

const chartData = (expense) => {
  
     const Jan = expense.filter((exp) => exp.date.slice(5, 7) === '01').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Feb = expense.filter((exp) => exp.date.slice(5, 7) === '02').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Mar = expense.filter((exp) => exp.date.slice(5, 7) === '03').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Apr = expense.filter((exp) => exp.date.slice(5, 7) === '04').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const May = expense.filter((exp) => exp.date.slice(5, 7) === '05').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const June = expense.filter((exp) => exp.date.slice(5, 7) === '06').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const July = expense.filter((exp) => exp.date.slice(5, 7) === '07').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Aug = expense.filter((exp) => exp.date.slice(5, 7) === '08').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Sep = expense.filter((exp) => exp.date.slice(5, 7) === '09').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Oct = expense.filter((exp) => exp.date.slice(5, 7) === '10').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Nov = expense.filter((exp) => exp.date.slice(5, 7) === '11').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);

  const Dec = expense.filter((exp) => exp.date.slice(5, 7) === '12').reduce((acc, val) => {
    acc = acc + Number(val.amount);
    return acc;
  }, 0);



  const data = [
    { name: 'Jan', value: Jan },
    { name: 'Feb', value: Feb },
    { name: 'Mar', value: Mar },
    { name: 'Apr', value: Apr },
    { name: 'May', value: May },
    { name: 'June', value: June },
    { name: 'July', value: July },
    { name: 'Aug', value: Aug },
    { name: 'Sep', value: Sep },
    { name: 'Oct', value: Oct },
    { name: 'Nov', value: Nov },
    { name: 'Dec', value: Dec },
  ]

  return data;

}

export default chartData;
