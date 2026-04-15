import { useState } from 'react';
import useAllTask from '../../hooks/useAllTask';
import { getData, getFilterData } from '../../utils';
import Card from '../card/Card';

export default function DoneColum() {
  const { state } = useAllTask();
  const [sortBtnToggle, setSortBtnToggle] = useState(false);
  const [filterBtnToggle, setFilterBtnToggle] = useState(false);
  const [sortData, setSortData] = useState('');
  const [tagData, setTagData] = useState('');
  const doneTag = getFilterData(state.allTask, 'done', tagData);
  const done = getData(state.allTask, 'done', tagData, sortData);
  return (
    <>
      <div class="flex-1 flex flex-col min-w-0 w-full">
        <div class="flex items-center gap-3 mb-6">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-gray-900">Done</h2>
            <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              {done.length}
            </span>
          </div>
          <div class="ml-auto flex items-center gap-2">
            <div class="relative">
              <button
                onClick={() => {
                  (setFilterBtnToggle(!filterBtnToggle),
                    setSortBtnToggle(false));
                }}
                type="button"
                class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
                data-menu-toggle="done-filter-menu"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414V19a1 1 0 01-.553.894l-2 1A1 1 0 0110 20v-6.293L3.293 7.293A1 1 0 013 6.586V4z"
                  ></path>
                </svg>
                Filter
              </button>
              {filterBtnToggle && (
                <div
                  class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2  z-40"
                  id="done-filter-menu"
                  data-menu
                >
                  <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Filter by tag
                  </p>
                  <button
                    onClick={() => {
                      (setTagData(''), setFilterBtnToggle(false));
                    }}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    All
                  </button>
                  {doneTag?.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        (setTagData(d.tag), setFilterBtnToggle(false));
                      }}
                      type="button"
                      class="w-full text-left px-4 py-2 hover:bg-gray-50"
                    >
                      {d.tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div class="relative">
              <button
                onClick={() => {
                  (setSortBtnToggle(!sortBtnToggle), setFilterBtnToggle(false));
                }}
                type="button"
                class="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-600 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 focus:outline-none"
                data-menu-toggle="done-sort-menu"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4 6h16M8 12h12M12 18h8"
                  ></path>
                </svg>
                Sort
              </button>
              {sortBtnToggle && (
                <div
                  class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2  z-40"
                  id="done-sort-menu"
                  data-menu
                >
                  <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                    Sort by date
                  </p>
                  <button
                    onClick={() => {
                      (setSortData('asc'), setSortBtnToggle(false));
                    }}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Newest first
                  </button>
                  <button
                    onClick={() => {
                      (setSortData('desc'), setSortBtnToggle(false));
                    }}
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Oldest first
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div class="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          {done.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </div>
      </div>
    </>
  );
}
