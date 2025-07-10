
import Counter from "./Counter";
import ErrorBoundary from "./errorBoundary";

const App = () => {
  return (
    <div>
      <ErrorBoundary>
        <Counter/>
      </ErrorBoundary>
    </div>
  );
};

export default App;