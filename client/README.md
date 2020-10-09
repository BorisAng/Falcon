```
Navigate to client/to-do-app
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```


## Solution 

Implementation achieved utilizing `Vue 2` (including `Vuex` and `Vue-Router`), `Bootstrap-Vue` and `Axios`. 
Some unit tests using `Jest` and `vue-test-utils`.

The app consists of a client router (i.e. Vuex) file which deals with the rendering of the different components 
depending on the route. Currently, there is one main component, called `MainContent` which holds 
the `CreateTask` and `TasksList`  components in a left column and the `TaskInfo` component in a right column.
  
`CreateTask` deals with adding a new task using the provided API, whereas `TasksList` renders two lists: the first 
one being the list of current (non-completed) tasks, and the second the list of completed tasks. Every item of the 
`TaskList` is rendered in `TaskItem` component. `TaskItem` renders slightly different content depending on whether the 
task is completed or not.

`TaskInfo` represents the information for a task. Note that in order for `TaskInfo` to be rendered a task must be selected.  
It allows editing of the task title and description using the back-endAPI. The surrounding idea is that it has a `watch` 
which watches when a new task has been selected and creates a clone and pristine copy of that selected task. 
The clone is used as the model of the inputs while another `watch` on the clone itself compares its current 
value with the pristine in order to store the new data or not. Furthermore, a task can also be completed or 
deleted from `TaskInfo`. 




  
