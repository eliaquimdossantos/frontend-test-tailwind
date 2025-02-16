'use client';

import { useState } from 'react';
import AddIcon from '@/components/atoms/AddIcon';
import Button from '@/components/atoms/Button';
import PageTitle from '@/components/molecules/PageTitle';
import MasonryObjectives from '@/components/organisms/MasonryObjectives';
import Modal from '@/components/molecules/Modal';
import FormCreateObjective from '@/components/organisms/FormCreateObjective';

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex flex-col my-4">
        <PageTitle>Lista de OKRs</PageTitle>
        <div className="flex justify-end">
          <Button className="shadow-md" variant="primary"  onClick={() => setShowModal(true)}>
            <div className="flex gap-2">
              <AddIcon />
              <span>Criar Objetivo</span>
            </div>
          </Button>
        </div>
      </nav>
      <main>
        <MasonryObjectives />
      </main>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Criar Novo Objetivo">
        <FormCreateObjective />
      </Modal>
    </>
  );
}
