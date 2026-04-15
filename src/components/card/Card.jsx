import { useState } from 'react';
import useAllTask from '../../hooks/useAllTask';
import useEditTask from '../../hooks/useEditTask';
import useModal from '../../hooks/useModal';
import { formatDate } from '../../utils';

export default function Card({ data }) {
  const { setShowModal } = useModal();
  const { editData, setEditData } = useEditTask();
  const { dispatch } = useAllTask();
  const [btnToggle, setBtnToggle] = useState(false);

  return (
    <>
      <div
        class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow relative"
        data-card="wireframes"
        data-column="todo"
      >
        <div
          class="absolute top-4 right-4 text-gray-500"
          data-card-menu-container
        >
          <button
            onClick={() => setBtnToggle(!btnToggle)}
            type="button"
            class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
            data-card-menu-toggle="wireframes-menu"
            aria-label="Open card menu"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
            </svg>
          </button>
          {btnToggle && (
            <div
              class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2  z-40"
              id="wireframes-menu"
              data-card-menu
            >
              <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                Move to
              </p>
              {data.status === 'todo' && (
                <>
                  <button
                    onClick={() =>
                      dispatch({ type: 'in-progress', payload: data.id })
                    }
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'done', payload: data.id })}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Done
                  </button>
                </>
              )}

              {data.status === 'in-progress' && (
                <>
                  <button
                    onClick={() => dispatch({ type: 'todo', payload: data.id })}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    To-Do
                  </button>
                  <button
                    onClick={() => dispatch({ type: 'done', payload: data.id })}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Done
                  </button>
                </>
              )}

              {data.status === 'done' && (
                <>
                  <button
                    onClick={() => dispatch({ type: 'todo', payload: data.id })}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    To Do
                  </button>
                  <button
                    onClick={() =>
                      dispatch({ type: 'in-progress', payload: data.id })
                    }
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    In Progress
                  </button>
                </>
              )}

              <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                <button
                  onClick={() => {
                    (setShowModal(true),
                      setBtnToggle(false),
                      setEditData(data));
                  }}
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Edit Card
                </button>
                <button
                  onClick={() => {
                    dispatch({ type: 'deleteTask', payload: data.id });
                  }}
                  type="button"
                  class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                >
                  Delete Card
                </button>
              </div>
            </div>
          )}
        </div>
        <div class="mb-3">
          <h3 class="font-semibold text-gray-900 text-sm">{data.title}</h3>
        </div>
        <p class="text-xs text-gray-600 mb-4">{data.description}</p>
        <div class="flex items-center gap-2 mb-3">
          <span
            class={`inline-block px-2.5 py-1 ${data.tag === 'design' && 'bg-blue-50 text-blue-700'}  ${data.tag === 'operations' && 'bg-amber-50 text-amber-700'}  ${data.tag === 'marketing' && 'bg-green-50 text-green-700'}  ${data.tag === 'creative' && 'bg-purple-50 text-purple-700'}  ${data.tag === 'development' && 'bg-indigo-50 text-indigo-700'}  ${data.tag === 'backend' && 'bg-red-50 text-red-700'}  ${data.tag === 'setup' && 'bg-green-50 text-green-700'}  ${data.tag === 'infrastructure' && 'bg-blue-50 text-blue-700'}  ${data.tag === 'documentation' && 'bg-cyan-50 text-cyan-700'} text-xs font-medium rounded`}
          >
            {data.tag}
          </span>
        </div>
        <div class="flex items-center gap-1 text-xs text-gray-500">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            ></path>
          </svg>
          {formatDate(data.date)}
        </div>
      </div>
    </>
  );
}
