import React from 'react';

import BaseToast from './base';
import { icons } from '../assets';
import colors from '../colors';

const WarningToast = (props) => {
  return <BaseToast {...props} color={colors.orange} icon={icons.warning} />;
};

export default WarningToast;
