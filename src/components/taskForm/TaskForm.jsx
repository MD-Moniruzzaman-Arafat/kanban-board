import { useState } from 'react';
import useAllTask from '../../hooks/useAllTask';
import useEditTask from '../../hooks/useEditTask';
import useModal from '../../hooks/useModal';

export default function TaskForm() {
  const { setShowModal } = useModal();
  const { editData, setEditData } = useEditTask();
  const { state, dispatch } = useAllTask();
  const [formData, setFormData] = useState(
    editData || {
      id: '',
      title: '',
      description: '',
      tag: '',
      date: '',
      status: '',
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.title &&
      formData.description &&
      formData.tag &&
      formData.date &&
      formData.status
    ) {
      console.log(formData);
      if (editData) {
        dispatch({
          type: 'editTask',
          payload: formData,
        });
      } else {
        dispatch({ type: 'addTask', payload: { ...formData, id: Date.now() } });
      }

      // reset form
      setFormData({
        title: '',
        description: '',
        tag: '',
        date: '',
        status: '',
      });

      // close modal
      setShowModal(false);
    }
  };

  return (
    <>
      <div class="bg-white border lg:min-w-2xl border-gray-200 rounded-2xl shadow-sm p-6 sm:p-8 absolute z-50 top-1/5 right-1/12 lg:right-1/4 lg:left-1/4 ">
        <form onSubmit={handleSubmit} class="space-y-8">
          <div class="grid grid-cols-1 gap-6">
            <div>
              <label
                for="title"
                class="block text-sm font-medium text-gray-700"
              >
                Task Title
              </label>
              <input
                onChange={handleChange}
                value={formData.title}
                type="text"
                id="title"
                name="title"
                placeholder="e.g. Wireframes"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                for="description"
                class="block text-sm font-medium text-gray-700"
              >
                Task Subtitle / Description
              </label>
              <input
                onChange={handleChange}
                value={formData.description}
                id="description"
                name="description"
                placeholder="Add context or acceptance criteria"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-gray-900 focus:outline-none"
                required
              />
            </div>
          </div>

          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label for="tag" class="block text-sm font-medium text-gray-700">
                Tag
              </label>
              <select
                required
                onChange={handleChange}
                value={formData.tag}
                id="tag"
                name="tag"
                class="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              >
                <option value={''} disabled>
                  Select tag
                </option>
                <option value="design">Design</option>
                <option value="operations">Operations</option>
                <option value="marketing">Marketing</option>
                <option value="creative">Creative</option>
                <option value="development">Development</option>
                <option value="backend">Backend</option>
                <option value="setup">Setup</option>
                <option value="infrastructure">Infrastructure</option>
                <option value="documentation">Documentation</option>
              </select>
            </div>

            <div>
              <label for="date" class="block text-sm font-medium text-gray-700">
                Due Date
              </label>
              <input
                required
                onChange={handleChange}
                value={formData.date}
                type="date"
                id="date"
                name="date"
                class="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              />
            </div>

            <div>
              <label
                for="status"
                class="block text-sm font-medium text-gray-700"
              >
                Status
              </label>
              <select
                required
                onChange={handleChange}
                value={formData.status}
                id="status"
                name="status"
                class="mt-2 w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
              >
                <option value={''} disabled>
                  Select status
                </option>
                <option value="todo">To-do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
              </select>
            </div>
          </div>

          <div class="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <a
              onClick={() => {
                (setShowModal(false), setEditData(''));
              }}
              class="inline-flex items-center justify-center rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </a>

            {editData ? (
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 cursor-pointer"
              >
                Edit Task
              </button>
            ) : (
              <button
                type="submit"
                class="inline-flex items-center justify-center rounded-xl bg-gray-900 px-6 py-3 text-sm font-semibold text-white hover:bg-gray-800 cursor-pointer"
              >
                Add Task
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
