const NEW_TESTING_DATA = {
  tasks: {
    "task-1": {
      id: "task-1",
      title: "Task 1",
      description: "Description for Task 1",
      status: "danger",
      due: "16/10/2025",
    },
    "task-2": {
      id: "task-2",
      title: "Task 2",
      description: "Description for Task 2",
      status: "warning",
      due: "20/11/2025",
    },
    "task-3": {
      id: "task-3",
      title: "Task 3",
      description: "Description for Task 3",
      status: "success",
      due: "02/12/2020",
    },
  },
  columns: {
    "column-1": {
      id: "column-1",
      title: "To do",
      taskIds: ["task-1", "task-2", "task-3"],
    },
    "column-2": {
      id: "column-2",
      title: "In Progress",
      taskIds: [],
    },
    "column-3": {
      id: "column-3",
      title: "Completed",
      taskIds: [],
    },
  },
  columnOrder: ["column-1", "column-2", "column-3"],
};

export default NEW_TESTING_DATA;
