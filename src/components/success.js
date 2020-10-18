import React from 'react';

import BaseToast from './base';
import { icons } from '../assets';
import colors from '../colors';

const SuccessToast = (props) => {
  return <BaseToast {...props} color={colors.green} icon={icons.success} />;
};

export default SuccessToast;
