import Todo from "./components/Todo";
import Header from "./components/Header";
import './App.css';
import Footer from "./components/Footer";

export default function App(){
        return(
            <div className="App">
                <Header/>
                <Todo/>
                
            </div>
        );
}