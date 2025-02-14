import { OKR } from '@/interfaces/OKR';
import { ResultKeys } from '@/interfaces/ResultKeys';

const api = process.env.NEXT_PUBLIC_API_URL;

export async function getOkrs(): Promise<OKR[]> {
  try {
    if (!api) throw new Error('A variável de ambiente NEXT_PUBLIC_API_URL não está definida no .env');

    const response = await fetch(`${api}/okrs`);
    if (!response.ok) throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar os OKRs:', error);
    return []; 
  }
}

export async function getResultKeys(okrId: string): Promise<ResultKeys[]> {
  try {
    if (!api) throw new Error('A variável de ambiente NEXT_PUBLIC_API_URL não está definida no .env');

    const response = await fetch(`${api}/okrs/${okrId}/resultKeys`);
    if (!response.ok) throw new Error(`Erro na API: ${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Erro ao buscar os ResultKeys:', error);
    return []; 
  }
}
