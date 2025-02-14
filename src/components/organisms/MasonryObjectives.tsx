import CardObjective from './CardObjective';

interface OKR {
  id: string;
  name: string;
}

interface MasonryObjectivesProps {
  okrs: OKR[];
}

export default function MasonryObjectives({ okrs }: MasonryObjectivesProps) {
  const columns = 3;
  const columnOkrs: OKR[][] = Array.from({ length: columns }, () => []);

  okrs.forEach((okr, index) => {
    columnOkrs[index % columns].push(okr);
  });

  return (
    <div className="grid m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl gap-4">
      {columnOkrs.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col">
          {column.map((okr) => (
            <CardObjective key={okr.id} name={okr.name} id={okr.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
