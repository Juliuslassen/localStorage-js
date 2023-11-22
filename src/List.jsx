/* eslint-disable react/prop-types */
function Lists({ people }) {
  return (
    <>
      <h1>People list</h1>
      <div id="people-list">
        <ol>
          {people.map((person) => {
            return (
              <li key={person.id}>
                <ul>
                  <li>name: {person.name}</li>
                  <li>profession: {person.profession}</li>
                </ul>
              </li>
            );
          })}
        </ol>
      </div>

    <table className="table-simple">
        <thead>
            <tr>
                <th>Name</th>
                <th>Profession</th>
            </tr>
        </thead>
        <tbody>
            {people.map((person) => {
                return (
                    <tr key={crypto.randomUUID()}>
                        <td>{person.name}</td>
                        <td>{person.profession}</td>
                    </tr>
                )
            })};
        </tbody>
    </table>

    </>
  );
}

export default Lists;
