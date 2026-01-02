import KanbanCol from './KanbanCol';
export default function NotesPage() {
    return (
        <div className='col-container'>
            <div className="todo-col">
                <KanbanCol />
            </div>
            <div className="inProg-col">
                <KanbanCol />
            </div>
            <div className="complete-col">
                <KanbanCol />
            </div>
        </div>

    );
}