import React from 'react';

import BaseToast from './base';
import { icons } from '../assets';
import colors from '../colors';

const ErrorToast = (props) => {
  return <BaseToast {...props} color={colors.red} icon={icons.error} />;
};

export default ErrorToast;
