export const DATE_FORMAT = {
  KOREAN_DATE: "KOREAN_DATE",
  DOT_DATE: "DOT_DATE",
  SMART_DATE: "SMART_DATE",
  KOREAN_DATE_TIME: "KOREAN_DATE_TIME",
  TIME: "TIME",
  TIME_WITH_SECONDS: "TIME_WITH_SECONDS",
  KOREAN_DATE_TIME_WITH_SECONDS: "KOREAN_DATE_TIME_WITH_SECONDS",
  SMART_DATE_TIME_WITH_SECONDS: "SMART_DATE_TIME_WITH_SECONDS",
  KOREAN_DATE_HOUR: "KOREAN_DATE_HOUR",
};

export const formatDate = (dateString, formatType = DATE_FORMAT.KOREAN_DATE) => {
  if (!dateString) return "";

  const date = new Date(dateString);
  const now = new Date();

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hour = String(date.getHours()).padStart(2, "0");
  const minute = String(date.getMinutes()).padStart(2, "0");
  const second = String(date.getSeconds()).padStart(2, "0");

  const isToday = year === now.getFullYear() &&
                    date.getMonth() === now.getMonth() &&
                    date.getDate() === now.getDate();

  const isThisYear = year === now.getFullYear();

  switch (formatType) {
    case DATE_FORMAT.KOREAN_DATE:
      return `${year}년 ${month}월 ${day}일`;

    case DATE_FORMAT.DOT_DATE:
      return `${year}.${month}.${day}`;

    case DATE_FORMAT.SMART_DATE:
      if (isToday) return `${hour}:${minute}`;
      if (isThisYear) return `${month}.${day}`;
      return `${year}.${month}.${day}`;

    case DATE_FORMAT.KOREAN_DATE_TIME:
      return `${year}년 ${month}월 ${day}일 ${hour}:${minute}`;

    case DATE_FORMAT.TIME:
      return `${hour}:${minute}`;

    case DATE_FORMAT.TIME_WITH_SECONDS:
      return `${hour}:${minute}:${second}`;

    case DATE_FORMAT.KOREAN_DATE_TIME_WITH_SECONDS:
      return `${year}년 ${month}월 ${day}일 ${hour}:${minute}:${second}`;

    case DATE_FORMAT.SMART_DATE_TIME_WITH_SECONDS:
      if (isToday) return `${hour}:${minute}:${second}`;
      if (isThisYear) return `${month}.${day}`;
      return `${year}.${month}.${day}`;

    case DATE_FORMAT.KOREAN_DATE_HOUR:
      return `${year}년 ${month}월 ${day}일 ${hour}시`;

    default:
      return dateString;
  }
};

export const toJavaLocalDateTime = (date = new Date()) => {
  const pad = (value) => String(value).padStart(2, "0");

  return [
    date.getFullYear(),
    "-",
    pad(date.getMonth() + 1),
    "-",
    pad(date.getDate()),
    "T",
    pad(date.getHours()),
    ":",
    pad(date.getMinutes()),
    ":",
    pad(date.getSeconds()),
  ].join("");
};