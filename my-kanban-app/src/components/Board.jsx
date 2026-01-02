import './Board.css'
import KanbanCol from './KanbanCol';
import Header from './Header';
export default function Board() {
    return (
        <>
        <div className="Header">
            <Header pageName="Home"/>
        </div>
         <div className='col-container'>
            <div className="todo-col">
                <KanbanCol title="ToDo" />
            </div>
            <div className="inProg-col">
                <KanbanCol  title="In Progress" />
            </div>
            <div className="complete-col">
                <KanbanCol  title="Completed" />
            </div>
        </div>
        </>
       

    );
}