const removeChildrenOfElement = (id) => {
  const nodesToRemove = document.getElementById(id);

  while (nodesToRemove.lastElementChild) {
    nodesToRemove.removeChild(nodesToRemove.lastElementChild);
  }
};

export default removeChildrenOfElement;