import { selector } from 'recoil';
import { detailListState } from './roomState';

export interface ProductHeaderType {
  name: string;
  district: string;
  neighberhood: string;
}

export const headerInfoSelector = selector<ProductHeaderType>({
  key: 'headerInfoSelector',
  get: ({ get }) => {
    const { name, district, neighberhood } = get(detailListState);
    return { name, district, neighberhood };
  },
});
