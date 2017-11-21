const defaults = {
  showStorybook: false
};

const actionTypeMap = {
  'SHOW_STORYBOOK': () => {
    return {
      showStorybook: true
    };
  }
};

const storybookReducer = (state, action) => {
  if (typeof state === 'undefined') {
    return defaults;
  }

  const actionTypeReducer = actionTypeMap[action.type];
  if (actionTypeReducer) {
    return actionTypeReducer(state, action);
  }

  return state;
};

export default storybookReducer;