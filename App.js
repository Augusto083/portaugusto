import React from "react";
import Contador from './contador';
import TodoList from './TodoList';
import NameAge from "./NomeAge";
import LifecycleDemo from './LifecycleDemo';
import ConditionalRenderingDemo from './ConditionalRenderingDemo';
import { GlobalStateProvider } from './GlobalStateContext'; // Importe o provedor de contexto
import Counter from './Counter';
function App(){

    return(
        <div>
            <NameAge/>,
<Contador/>
<TodoList/>
<LifecycleDemo/>
<ConditionalRenderingDemo/>
<GlobalStateProvider/>
<Counter/>
        </div>
    )
}
export default App
