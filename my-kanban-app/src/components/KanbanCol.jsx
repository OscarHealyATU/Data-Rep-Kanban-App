import './KanbanCol.css';
import TaskCard from './TaskCard'; './TaskCard';
export default function NoteCard({ title }) {
    return (
        <div className='kanban-column'>
            <h2>{title}</h2>
            <TaskCard />
        </div>

    )
};