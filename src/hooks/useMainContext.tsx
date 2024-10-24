import MainContext from '@/context/MainContext';
import { useContext } from 'react'

const useMainCOntext = () => {
  return useContext( MainContext );
}

export default useMainCOntext;