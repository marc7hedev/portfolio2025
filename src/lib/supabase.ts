import { createClient } from '@supabase/supabase-js';

// Credenciales de Supabase (normalmente esto estaría en variables de entorno)
const supabaseUrl = 'https://zqvvvezacbmdpbuzdlxo.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpxdnZ2ZXphY2JtZHBidXpkbHhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3ODU4MDUsImV4cCI6MjA1NjM2MTgwNX0.LGeK2NicHSXjgMxqa3rBI1cY_htMK3910LEUIxFWl9s';

// Crear el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Tipos
export type LikeType = 'portfolio' | 'project';

interface DatabaseError extends Error {
  details?: string;
  hint?: string;
}

// Funciones helper para manejar los likes
export const getLikes = async (type: LikeType, projectId?: number) => {
  try {
    const { data, error } = await supabase
      .from('likes')
      .select('count')
      .eq('type', type)
      .eq('project_id', projectId || 0)
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error.message);
      return 0;
    }
    
    // Si no hay datos, intentamos crear el registro
    if (!data || data.length === 0) {
      await initializeLikes(type, projectId);
      return 0;
    }
    
    return data[0].count || 0;
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error('Error fetching likes:', dbError.message);
    return 0;
  }
};

// Función para inicializar likes
const initializeLikes = async (type: LikeType, projectId?: number) => {
  try {
    const { error } = await supabase
      .from('likes')
      .insert({
        type,
        project_id: projectId || 0,
        count: 0
      });

    if (error) {
      console.error('Error initializing likes:', error.message);
    }
  } catch (error) {
    console.error('Error in initializeLikes:', error);
  }
};

export const incrementLikes = async (type: LikeType, projectId?: number) => {
  try {
    // Primero asegurarse de que existe el registro
    await getLikes(type, projectId);

    // Usar la función RPC para incrementar
    const { error } = await supabase.rpc('increment_likes', {
      p_type: type,
      p_project_id: projectId || 0
    });

    if (error) {
      console.error('Supabase error:', error.message);
      return false;
    }
    
    return true;
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error('Error incrementing likes:', dbError.message);
    return false;
  }
};

// Funciones helper para manejar las visitas
export const getVisits = async () => {
  try {
    const { data, error } = await supabase
      .from('visits')
      .select('count')
      .limit(1);
    
    if (error) {
      console.error('Supabase error:', error.message);
      return 0;
    }
    
    // Si no hay datos, intentamos crear el registro
    if (!data || data.length === 0) {
      await initializeVisits();
      return 0;
    }
    
    return data[0].count || 0;
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error('Error fetching visits:', dbError.message);
    return 0;
  }
};

// Función para inicializar visitas
const initializeVisits = async () => {
  try {
    const { error } = await supabase
      .from('visits')
      .insert({ count: 0 });

    if (error) {
      console.error('Error initializing visits:', error.message);
    }
  } catch (error) {
    console.error('Error in initializeVisits:', error);
  }
};

export const incrementVisits = async () => {
  try {
    // 1. Obtener el registro actual para tener el ID
    const { data, error: fetchError } = await supabase
      .from('visits')
      .select('id, count')
      .limit(1);

    if (fetchError) {
      console.error('Error fetching visits for increment:', fetchError.message);
      return false;
    }

    // Si no existe, inicializar
    if (!data || data.length === 0) {
      await initializeVisits();
      return true;
    }

    const row = data[0];

    // 2. Actualizar usando el ID específico (esto soluciona el error de WHERE clause)
    const { error: updateError } = await supabase
      .from('visits')
      .update({ count: row.count + 1 })
      .eq('id', row.id);

    if (updateError) {
      console.error('Supabase error updating visits:', updateError.message);
      return false;
    }
    
    return true;
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error('Error incrementing visits:', dbError.message);
    return false;
  }
};