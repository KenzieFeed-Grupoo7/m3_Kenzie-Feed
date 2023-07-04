import { GlobalStyle } from "./Styles/global.ts";
import { ResetStyle } from "./Styles/reset.ts";
import { RoutesMain } from "./Routes/RoutesMain.tsx";

export const App = () => {
  return (
    
    <div className="App">
      <ResetStyle />
      <GlobalStyle />
      <RoutesMain/>
    </div>     
    
  );
};