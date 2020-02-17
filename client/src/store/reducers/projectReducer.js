const initState = {}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
          console.log('created project: ' + action.project);
          return state;
        case 'CREATE_PROJECT_ERROR':
          console.log('created error: ' + action.err);
          return state;
          // case 'RETRIEVED_USER_PROJECTS':
          //   console.log('retrieved user projects: ' + action.project);
          //   return state;
          // case 'ERROR_RETRIEVING_USER_PROJECTS':
          //   console.log('receiving error: ' + action.err);
          //   return state;
        default:
          return state;
    }
};

export default projectReducer;