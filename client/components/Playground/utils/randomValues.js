/**
 * randomValues
 *
 * @param  {object} propTypes The propTypes for a component parsed by react-docgen
 * @return {object}           The propTypes with random values based on type
 */

import mapValues from 'lodash/mapValues';

const randomValues = (propTypes) => {
  return mapValues(propTypes, (propType) => {
    if (!(propType.name === 'shape' || propType.type && propType.type.name === 'shape')) {
      return propType.control.type.randomValue(propType);
    }

    if (propType.value) {
      return randomValues(propType.value);
    }
  });
};

export default randomValues;