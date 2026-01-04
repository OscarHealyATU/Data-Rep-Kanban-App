import './KanbanCol.css';
import TaskCard from './TaskCard'; './TaskCard';
export default function KanbanCol({ title, status }) {
    return (
        <div className='kanban-column'>
            <h2>{title}</h2>
            <hr></hr>
            <TaskCard status={status} />
        </div>

    )
};