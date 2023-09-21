import './App.css';
import Card from './compenents/Card';
import Item from './compenents/Item';
import ItemDate from './compenents/ItemDate'

function App() {
  const response = [
    {
      name: "Nirma",
      date: 23,
      month: "June",
      year: 2023
    },
    {
      name: "Surf Excel",
      date: 19,
      month: "Sept",
      year: 2023
    },
    {
      name: "Rin",
      date: 30,
      month: "Aug",
      year: 2023
    }
  ]
  return (
    <div>
      <Card>
        <Item name={response[0].name}></Item>
        <ItemDate date={response[0].date} month={response[0].month} year={response[0].year}></ItemDate>

        <Item name={response[1].name}></Item>
        <ItemDate date={response[1].date} month={response[1].month} year={response[1].year}></ItemDate>

        <Item name={response[2].name}></Item>
        <ItemDate date={response[2].date} month={response[2].month} year={response[2].year}></ItemDate>
        <div className="App">
          Mantra Gor
        </div>
      </Card>
    </div>
  );
}

export default App;
