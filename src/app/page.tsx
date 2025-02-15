'use client';

import { useState } from 'react';
import AddIcon from '@/components/atoms/AddIcon';
import Button from '@/components/atoms/Button';
import PageTitle from '@/components/molecules/PageTitle';
import MasonryObjectives from '@/components/organisms/MasonryObjectives';
import Modal from '@/components/molecules/Modal';
import CreateObjectiveForm from '@/components/pages/home/CreateObjectiveForm';
import { useOKRs } from '@/context/OKRContext';

export default function Home() {
  const { okrs } = useOKRs(); 
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex flex-col my-4">
        <PageTitle>Lista de OKRs</PageTitle>
        <div className="flex justify-end">
          <Button variant="primary" onClick={() => setShowModal(true)}>
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
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Criar Novo Objetivo">
        <CreateObjectiveForm />
      </Modal>
    </>
  );
}
