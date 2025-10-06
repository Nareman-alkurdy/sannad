// import { useQuery } from '@tanstack/react-query';
// import axios from 'axios';

// function useGetQuery<T = any>(
//   KEY: string | string[],
//   url: string,
//   params: Record<string, any> = {},
//   options: Record<string, any> = {},
// ) {

  

//   const KEYS = typeof KEY === 'string' ? [KEY, params] : [...KEY, params];
//   return useQuery({
//     queryKey: KEYS,
//     queryFn: async () => {
//       const response = await axios.get(url, { params });
//       return response.data as T ;
//     },
//     ...options,
    
//   });
// }

// export default useGetQuery;