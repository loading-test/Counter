import React, { useState } from "react";
import Counters from "./component/counters";
import NavBar from "./component/navBar";

function App() {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDecrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (count) => count.id === counterId
    );
    newCounters[elementIndex].value--;
    setCounters(newCounters);
  };

  const handleIncrement = (counterId) => {
    const newCounters = [...counters];
    const elementIndex = newCounters.findIndex(
      (count) => count.id === counterId
    );
    newCounters[elementIndex].value++;
    setCounters(newCounters);
  };

  const handleDelete = (couterId) => {
    const newCounter = counters.filter((counter) => counter.id !== couterId);
    setCounters(newCounter);
  };

  const handleReset = () => setCounters(initialState);

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItem={counters.reduce((a, c) => a + c.value, 0)} />
        <Counters
          onDecrement={handleDecrement}
          onIncrement={handleIncrement}
          onReset={handleReset}
          onDelete={handleDelete}
          counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
