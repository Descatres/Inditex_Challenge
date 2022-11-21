// Save products list to local storage
export const localStorageSaveItems = (items) => {
  let t1 = new Date().getTime();
  // console.log("Products saved to local storage");
  localStorage.setItem("itemsList", JSON.stringify(items));
  localStorage.setItem("itemsListTimestamp", t1);
};

export const localStorageGetItems = () => {
  let diff = new Date().getTime() - localStorage.getItem("itemsListTimestamp");
  // console.log("Got products from local storage");
  const items = localStorage.getItem("itemsList");
  return items != null && diff < 3600000 ? JSON.parse(items) : [];
};

export const localStorageSaveDescription = (description) => {
  let t2 = new Date().getTime();
  description[0].timestamp = t2;

  // console.log("Saved description to local storage");
  localStorage.setItem(description[0].id, JSON.stringify(description));
};

export const localStorageGetDescription = (id) => {
  // console.log("Got product description from local storage");

  const description = JSON.parse(localStorage.getItem(id));

  if (description == null || description.length === 0) return [];

  return new Date().getTime() - description[0].timestamp < 3600000
    ? description
    : [];
};
