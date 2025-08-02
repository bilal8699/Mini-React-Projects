function Category({ finalCatg, setCatName }) {
  return (
    <>
      <div className="catg">
        <p>Filters</p>
        <hr />
        <p>Categories</p>
      </div>
      <ul className="catg-list">
        {finalCatg.map((item, index) => (
          <li
            onClick={() => {
              setCatName(item.name);
            }}
            key={index}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Category;
