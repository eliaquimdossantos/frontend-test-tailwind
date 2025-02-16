import OKR from '@/interfaces/OKR';
import ResultKey from '@/interfaces/KeyResult';

function getApiUrl() {
  if (!process.env.NEXT_PUBLIC_API_URL) {
    throw new Error('A variável de ambiente NEXT_PUBLIC_API_URL não está definida.');
  }
  return process.env.NEXT_PUBLIC_API_URL;
};

const apiUrl = getApiUrl();

// get - api/okrs
export async function getOkrs(): Promise<OKR[]> {
  try {
    const response = await fetch(`${apiUrl}/okrs`);
    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Não foi possível buscar os OKRs:', error);
    return [];
  }
}

// get - api/okrs
export async function getOkr(okrId: string): Promise<OKR | null> {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}`);
    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error('Não foi possível buscar os OKRs:', error);
    return null;
  }
}

// post - api/okrs
export async function postOkrs(data: Partial<OKR>): Promise<OKR[] | null> {
  try {
    const response = await fetch(`${apiUrl}/okrs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Não foi possível buscar os OKRs:', error);
    return null;
  }
}

// get - api/okrs/:id/resultKeys
export async function getResultKeys(okrId: string): Promise<ResultKey[]> {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}/resultKeys`);
    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}

// put /api/okrs/:id
export async function putOkr(okrId: string, updatedData: Partial<OKR>) {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// post /api/okrs/:okrId/resultKeys
export async function postResultKey(okrId: string, data: Partial<ResultKey>) {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}/resultKeys`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// put /api/okrs/:okrId/resultKeys/:keyResultId
export async function putResultKey(okrId: string, keyResultId: string, updatedData: Partial<ResultKey>) {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}/resultKeys/${keyResultId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedData),
    });

    if (!response.ok) throw new Error(response.statusText);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

// get /api/okrs/:okrId/resultKeys/:keyResultId
export async function getResultKey(okrId: string, keyResultId: string) {
  try {
    const response = await fetch(`${apiUrl}/okrs/${okrId}/resultKeys/${keyResultId}`);
    if (!response.ok) throw new Error(`${response.status} - ${response.statusText}`);

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

