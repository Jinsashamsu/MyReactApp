import { useRecoilState, RecoilRoot } from 'recoil';    
import { atom } from 'recoil';
export const bearCountStateRecoil = atom<number>({
    key: 'bearCountState', // Unique key
    default: 0,            // Initial value
  });