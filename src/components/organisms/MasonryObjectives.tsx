import { useOKRs } from '@/hooks/useOKRs';
import CardObjective from './CardObjective';
import CardObjectiveSkeleton from './CardObjectiveSkeleton';

interface OKR {
  id: string;
  name: string;
}

export default function MasonryObjectives() {
  const { okrs, loading } = useOKRs();

  const columns = 3;
  const columnOkrs: OKR[][] = Array.from({ length: columns }, () => []);

  okrs.forEach((okr, index) => {
    columnOkrs[index % columns].push(okr);
  });

  if (loading) {
    const skeletons = Array.from({ length: 3 }, (_, index) => (
      <CardObjectiveSkeleton key={index} />
    ));

    return (
      <div className="grid m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl gap-4">
        {skeletons}
      </div>
    );
  }

  return (
    <div className="grid m-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-screen-2xl gap-4">
      {columnOkrs.map((column, colIndex) => (
        <div key={colIndex} className="flex flex-col gap-4">
          {column.map((okr) => (
            <CardObjective key={okr.id} name={okr.name} okrId={okr.id} />
          ))}
        </div>
      ))}
    </div>
  );
}
