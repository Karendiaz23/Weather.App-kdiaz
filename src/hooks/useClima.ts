import { useEffect, useState } from "react";
import { getClima } from "../services/weatherApi";

export const useClima = (ciudad: string) => {
  const [clima, setClima] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargar = async () => {
      const data = await getClima(ciudad);
      setClima(data);
      setLoading(false);
    };

    cargar();
  }, [ciudad]);

  return { clima, loading };
};