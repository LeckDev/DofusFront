import { DataTable } from '@/components/ui/data-table';
import { createLazyFileRoute } from '@tanstack/react-router';
import { ItemDto, columns } from '@/components/ui/columnsItems'
import React, { useState, useEffect } from 'react';

// Création de la route paresseuse
export const Route = createLazyFileRoute('/addItem')({
  component: AddItem,
});

// Hook personnalisé pour récupérer les items
function useItems() {
  const [items, setItems] = useState<ItemDto[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('https://localhost:7111/api/Item');
        if (!response.ok) {
          throw new Error("Une erreur est survenue lors de la récupération des items");
        }
        const itemsData = await response.json();
        setItems(itemsData);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Une erreur inconnue est survenue');
      } finally {
        setLoading(false);
      }
    }

    fetchItems();
  }, []);

  return { items, loading, error };
}

function AddItem() {
  const { items, loading, error } = useItems();

  if (loading) {
    return <p>Chargement en cours...</p>;
  }

  if (error) {
    return <p>Erreur : {error}</p>;
  }

  return (
    <div>
      <div className="container mx-auto py-10">
      <DataTable columns={columns} data={items} />
    </div>
    </div>
  );
}