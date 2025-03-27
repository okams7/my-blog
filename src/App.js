import './App.css';

function App() {
  return (
    <div className="App">
      <h1>App Component</h1>
      <p>{10}</p> // ستعرض الرقم 10
      <p>{"مرحبًا بالمطورين"}</p> // ستعرض النص
      <p>{[1, 2, 3, 4, 5]}</p> // ستعرض الأرقام كمصفوفة متصلة
      <p>{Math.random() * 10}</p> // ستعرض رقمًا عشوائيًا في كل تحديث
    </div>
  );
}

export default App;
