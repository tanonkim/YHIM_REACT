import { atom, selector } from 'recoil';

export const detailListState = atom<ProductDetailType>({
  key: 'detailListState',
  default: {
    name: '',
    description: '',
    district: '',
    neighberhood: '',
    price: 0,
    address: '',
    guests: 0,
    beds: 0,
    bedrooms: 0,
    baths: 0,
    latitute: 0,
    longitute: 0,
    host: '',
    host_image: '',
    host_created: '',
    room_images_url: [],
    check_in: [],
    room_amenities: [],
    check_in_time: '',
    check_out_time: '',
    house_rules: [],
    category: '',
  },
});

export const roomImagesState = selector<string[]>({
  key: 'roomImagesState',
  get: ({ get }) => get(detailListState).room_images_url,
});

export const descriptionState = selector<string>({
  key: 'descriptionState',
  get: ({ get }) => get(detailListState).description,
});

export const roomAmenitiesState = selector<AmenityType[]>({
  key: 'roomAmenitiesState',
  get: ({ get }) => get(detailListState).room_amenities,
});

export const houseRulesState = selector<NoticeType[]>({
  key: 'houseRulesState',
  get: ({ get }) => get(detailListState).house_rules,
});

export const priceState = selector<number>({
  key: 'priceState',
  get: ({ get }) => get(detailListState).price,
});
