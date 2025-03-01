import { createClient } from '@supabase/supabase-js';

// Estas variables se actualizarán con las credenciales reales de Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

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
    // Primero asegurarse de que existe el registro
    await getVisits();

    // Usar la función RPC para incrementar
    const { error } = await supabase.rpc('increment_visits');

    if (error) {
      console.error('Supabase error:', error.message);
      return false;
    }
    
    return true;
  } catch (error: unknown) {
    const dbError = error as DatabaseError;
    console.error('Error incrementing visits:', dbError.message);
    return false;
  }
};