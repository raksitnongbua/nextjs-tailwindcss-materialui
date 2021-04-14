import React from 'react';
import { connect } from 'react-redux';
import { IRootState } from '../store';
import Chart from '../components/chart';

type ReduxType = ReturnType<typeof mapStateToProps>;

const ChartContainer: React.FC<ReduxType> = ({ themeType }) => {
  return <Chart theme={themeType} />;
};

const mapStateToProps = ({ theme: data }: IRootState) => {
  const { theme } = data;
  return { themeType: theme };
};
const connected = connect(mapStateToProps)(ChartContainer);
export default connected;
