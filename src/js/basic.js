export default function getPhoneNumber(phoneNumberParam) {
  let phoneNumber = phoneNumberParam;
  phoneNumber = phoneNumber.replace(/[\s|-]/g, ''); // Избавляемся от пробелов и тире
  phoneNumber = phoneNumber.replace(/^8\((\d{3})\)/g, '+7$1'); // Если нужно, приводим к международному формату
  return phoneNumber;
}
