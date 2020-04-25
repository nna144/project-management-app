const initialState = {
  projects: [
    { id: "1", title: "Collect all the stars", content: "la la la" },
    { id: "2", title: "Print the pages", content: "la la la" },
    { id: "3", title: "Fix the navbar", content: "la la la" },
  ],
};

const projectReducer = (state = initialState, action) => {
  return state;
};

export default projectReducer;
