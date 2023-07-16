function List() {
  const tasks = [
    {
      task: "React",
      time: "02:00:00",
      id: 1,
    },
    {
      task: "Javascript",
      time: "01:00:00",
      id: 2,
    },
    {
        task: "Typescript",
        time: "03:00:00",
        id: 3,
      },
  ];

  return (
    <aside>
      <h2> Daily Subjects of Study </h2>
      <ul>
        {tasks.map(({ id, task, time }) => (
          <li key={id}>
            <h3>{task}</h3>
            <span>{time}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default List;
