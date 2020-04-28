export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    // Reference to the firestore database.
    const firestore = getFirestore();

    /* Reference to the 'projects' collection inside the database.
    Add a new document to the collection. */
    firestore
      .collection("projects")
      .add({
        ...project,
        authorFirstName: "Na",
        authorLastName: "Vo",
        authorId: 12345,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", project });
      })
      .catch((error) => {
        dispatch({ type: "CREATE_PROJECT_ERROR", error });
      });
  };
};
