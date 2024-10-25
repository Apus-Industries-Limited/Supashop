import MainContext from '@/context/MainContext';
import { useContext } from 'react'

const useMainContext = () => {
  return useContext( MainContext );
}

export default useMainContext;