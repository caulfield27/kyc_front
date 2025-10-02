export const elementsDetails: {
  [key: string]: {
    element_type_id: number;
    field_key: string;
    title: string;
  };
} = {
  info_text: {
    element_type_id: 1,
    field_key: 'extra_info',
    title: 'Дополнительная информация',
  },
  info_number: {
    element_type_id: 2,
    field_key: 'income',
    title: 'Доход в месяц',
  },
  phone_otp: {
    element_type_id: 6,
    field_key: 'phone',
    title: 'Номер телефона',
  },
  regula_ocr_front: {
    element_type_id: 7,
    field_key: 'doc_front',
    title: 'Паспорт(лицевая)',
  },
  regula_ocr_back: {
    element_type_id: 8,
    field_key: 'doc_back',
    title: 'Паспорт(оборот)',
  },
  visionlabs_liveness: {
    element_type_id: 9,
    field_key: 'liveness',
    title: 'Проверка живости',
  },
  visionlabs_face_match: {
    element_type_id: 10,
    field_key: 'face_match',
    title: 'Сравнение лица',
  },
  file_upload: {
    element_type_id: 11,
    field_key: 'extra_doc',
    title: 'Доп. документ (опц)',
  },
};
