import React from 'react'

const sortExpense = (expData, sortVal) => {

    console.log('la', expData, sortVal);

    if (sortVal === 'default') return expData;

    let sortedExp = [...expData];


    switch (true) {
        case (sortVal === 'High to Low'): {
            return sortedExp = sortedExp.sort((exp1, exp2) => exp2.amount - exp1.amount);
            break;
        }
        case (sortVal === 'Low to High'): {
            return sortedExp = sortedExp.sort((exp1, exp2) => exp1.amount - exp2.amount);
            break;
        }
        case (sortVal === 'Newest to Oldest'): {
            return sortedExp = sortedExp.sort((exp1, exp2) => exp2.id - exp1.id);
        }
        case (sortVal === 'Oldest to Newest'): {
            return sortedExp = sortedExp.sort((exp1, exp2) => exp1.id - exp2.id);
        }
        default:
            return sortedExp;
    }

}

export default sortExpense;
