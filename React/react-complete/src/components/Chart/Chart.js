import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const dataPOintsValue = props.dataPoints.map(dataPoint => dataPoint.value);
    const maximumValue = Math.max(...dataPOintsValue);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximumValue}
          label={dataPoint.label}
        ></ChartBar>
      ))}
    </div>
  );
};

export default Chart; 
