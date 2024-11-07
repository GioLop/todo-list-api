interface CreateTodo {
    title: string,
    description: string
};

interface UpdateTodo {
    title?: string,
    description?: string,
    taskState?: taskStates
};

type taskStates = 'PENDING' | 'IN_PROGRESS' | 'DONE';

export type {
    taskStates
};

export {
    CreateTodo,
    UpdateTodo
};