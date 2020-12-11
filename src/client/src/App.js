import Categories from "./components/Categories";
import Logo from "./components/Logo";

function App() {
  return (
    <div>
      <Logo />
      <Categories categories={[]} />
    </div>
  );
}

export default App;
