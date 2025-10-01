export const elementsDetails: {
  [key: string]: {
    element_type_id: number;
    field_key: string;
    title: string;
  };
} = {
  info_text: {
    element_type_id: 1,
    field_key: 'info_text',
    title: 'Дополнительная информация',
  },
  info_number: {
    element_type_id: 2,
    field_key: 'income',
    title: 'Доход в месяц',
  },
  info_date: {
    element_type_id: 3,
    field_key: 'date',
    title: 'Дата заявки',
  },
  info_list: {
    element_type_id: 4,
    field_key: 'info_list',
    title: 'Список',
  },
  info_checkbox: {
    element_type_id: 5,
    field_key: 'info_checkbox',
    title: 'Чекбокс',
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
