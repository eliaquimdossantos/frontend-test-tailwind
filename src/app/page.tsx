'use client';

import { useEffect, useState, useCallback } from 'react';
import AddIcon from '@/components/atoms/AddIcon';
import Button from '@/components/atoms/Button';
import PageTitle from '@/components/molecules/PageTitle';
import MasonryObjectives from '@/components/organisms/MasonryObjectives';
import { OKR } from '@/interfaces/OKR';
import { getOkrs } from '@/services/api';

export default function Home() {
  const [okrs, setOkrs] = useState<OKR[]>([]);

  const fetchOkrs = useCallback(async () => {
    const data = await getOkrs();
    setOkrs(data);
  }, []);

  useEffect(() => {
    fetchOkrs();
  }, [fetchOkrs]);

  return (
    <>
      <nav className="flex flex-col my-4">
        <PageTitle>Lista de OKRs</PageTitle>
        <div className="flex justify-end">
          <Button variant="primary" onClick={() => { }}>
            <div className="flex gap-2">
              <AddIcon />
              <span>Criar Objetivo</span>
            </div>
          </Button>
        </div>
      </nav>
      <main>
        <MasonryObjectives okrs={okrs} />
      </main>
    </>
  );
}
