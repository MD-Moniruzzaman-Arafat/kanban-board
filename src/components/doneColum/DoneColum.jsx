export default function DoneColum() {
  return (
    <>
      <div class="flex-1 flex flex-col min-w-0 w-full">
        <div class="flex items-center gap-3 mb-6">
          <div class="flex items-center gap-3">
            <h2 class="text-lg font-semibold text-gray-900">Done</h2>
            <span class="text-sm font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
              3
            </span>
          </div>
          <div class="ml-auto flex items-center gap-2">
            <div class="relative">
              <button
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
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="done-filter-menu"
                data-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Filter by tag
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Design
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Operations
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Marketing
                </button>
              </div>
            </div>
            <div class="relative">
              <button
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
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="done-sort-menu"
                data-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Sort by date
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Newest first
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  Oldest first
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="space-y-4 flex-1 overflow-visible lg:overflow-y-auto">
          {/* <!-- Card 1 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow opacity-75 relative z-40"
            data-card="software-installation"
            data-column="done"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="software-installation-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="software-installation-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">
                Software Installation
              </h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Install and configure development tools
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-green-50 text-green-700 text-xs font-medium rounded">
                Setup
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
              Aug 23
            </div>
          </div>

          {/* <!-- Card 2 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow opacity-75 relative z-30"
            data-card="database-design"
            data-column="done"
          >
            <div
              class="absolute top-4 right-4 text-gray-500 z-40"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="database-design-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="database-design-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">
                Database Design
              </h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">
              Database schema and optimization
            </p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded">
                Infrastructure
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
              Aug 24
            </div>
          </div>

          {/* <!-- Card 3 --> */}
          <div
            class="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow opacity-75 relative z-20"
            data-card="documentation"
            data-column="done"
          >
            <div
              class="absolute top-4 right-4 text-gray-500"
              data-card-menu-container
            >
              <button
                type="button"
                class="p-1 rounded-full hover:bg-gray-100 hover:text-gray-700 focus:outline-none"
                data-card-menu-toggle="documentation-menu"
                aria-label="Open card menu"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 3a1.25 1.25 0 110-2.5A1.25 1.25 0 018 3zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zm0 6.25a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5z" />
                </svg>
              </button>
              <div
                class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg text-sm text-gray-700 py-2 hidden z-40"
                id="documentation-menu"
                data-card-menu
              >
                <p class="px-4 pb-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Move to
                </p>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  To-do
                </button>
                <button
                  type="button"
                  class="w-full text-left px-4 py-2 hover:bg-gray-50"
                >
                  In Progress
                </button>
                <div class="border-t border-gray-100 mt-2 pt-2 space-y-1">
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 hover:bg-gray-50"
                  >
                    Edit Card
                  </button>
                  <button
                    type="button"
                    class="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
                  >
                    Delete Card
                  </button>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <h3 class="font-semibold text-gray-900 text-sm">Documentation</h3>
            </div>
            <p class="text-xs text-gray-600 mb-4">Complete API documentation</p>
            <div class="flex items-center gap-2 mb-3">
              <span class="inline-block px-2.5 py-1 bg-cyan-50 text-cyan-700 text-xs font-medium rounded">
                Documentation
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
              Aug 25
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
