import React from 'react';

function ListsContainer(props) {
  return (
    <div className="list-container">
      <h2 className="title m-4 lg">Lists</h2>
      <div className="list-list flex overflow-x-auto">
        <div className="flex align-center justify-center flex-nowrap">
          <div class="list-item rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <p class="n-tasks text-base">5 tasks</p>
              <div class="name font-bold text-xl mb-2">Home</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  class="bg-orange-600 h-2.5 rounded-full"
                  style={{ width: '20%' }}
                ></div>
              </div>
            </div>
          </div>
          <div class="list-item rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <p class="n-tasks text-base">12 tasks</p>
              <div class="name font-bold text-xl mb-2">Work</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  class="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>
          </div>
          <div class="list-item rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
              <p class="n-tasks text-base">2 tasks</p>
              <div class="name font-bold text-xl mb-2">Whatever</div>
              <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div
                  class="bg-yellow-600 h-2.5 rounded-full"
                  style={{ width: '50%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ListsContainer };
