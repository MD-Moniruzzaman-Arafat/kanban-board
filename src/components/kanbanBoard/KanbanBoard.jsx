import useAllTask from '../../hooks/useAllTask';
import DoneColum from '../doneColum/DoneColum';
import ProgressColum from '../progressColum/ProgressColum';
import TodoColum from '../todoColum/TodoColum';

export default function KanbanBoard() {
  const { state } = useAllTask();
  console.log(state);
  return (
    <>
      <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
        <div className="flex flex-col gap-6 xl:flex-row h-full">
          <TodoColum />
          <ProgressColum />
          <DoneColum />
        </div>
      </div>
    </>
  );
}
