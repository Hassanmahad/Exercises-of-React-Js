const ListUsers = ({ List }) => {
  return (
    <div>
      <h2>User List</h2>
      {List.length > 0 ? (
        <ul>
          {List.map((l) => (
            <li key={l.id}>
              {l.name} {l.Email}
            </li>
          ))} 
        </ul>
      ) : (
        <p>No List found.</p>
      )}
    </div>
  );
};

export default ListUsers;
