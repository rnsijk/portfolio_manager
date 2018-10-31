export const getCategoryList = ( categories, constituents) => {
  const categoryList = [];
  categories.map((cat) => {
    const list = [];
    let totalWeight = 0;
    let totalEditWeight = 0;
    constituents.reduce((acc, item) => {
      if (item.instrument.type.toLowerCase() === cat) {
        if (item.editWeight === undefined) {
          item.editWeight = item.weight;
        }
        acc.push(item);
        totalWeight += item.weight;
        totalEditWeight = Math.round((totalEditWeight + item.editWeight) * 100) / 100;
      }
      return acc;
    }, list);
    categoryList.push({
      type: cat, list, totalWeight, totalEditWeight,
    });
    return null;
  });
  return categoryList;
}

