const characters = [
  {
    text: "АГ",
    code: "ag",
  },
  {
    text: "УВ",
    code: "uv",
  },
  {
    text: "УС",
    code: "us",
  },
  {
    text: "МИ",
    code: "mi",
  },
  {
    text: "СЛ",
    code: "sl",
  },
  {
    text: "ДВ",
    code: "dv",
  },
  {
    text: "МТ",
    code: "mt",
  },
  {
    text: "УН",
    code: "un",
  },
  {
    text: "КС",
    code: "cs",
  },
  {
    text: "ВИ",
    code: "vi",
  },
  {
    text: "ГГ",
    code: "s",
  },
  {
    text: "НН",
    code: "nn",
  },
  {
    text: "КР",
    code: "kr",
  },
  {
    text: "ОП",
    code: "op",
  },
  {
    text: "СТ",
    code: "st",
  },
  {
    text: "РТ",
    code: "rt",
  },
  {
    text: "КТ",
    code: "kt",
  },
  {
    text: "ЗТ",
    code: "zt",
  },
  {
    text: "ХЗ",
    code: "hz",
  },
  {
    text: "ДН",
    code: "dn",
  },
  {
    text: "КЛ",
    code: "kl",
  },
  {
    text: "ЕВ",
    code: "ev",
  },
  {
    text: "ТИ",
    code: "ti",
  },
  {
    text: "АН",
    code: "an",
  },
  {
    text: "АЛ",
    code: "al",
  },
  {
    text: "АМ",
    code: "am",
  },
  {
    text: "ВЛ",
    code: "vl",
  },
  {
    text: "НД",
    code: "nd",
  },
  {
    text: "Г_КОМА",
    code: "v_koma",
  },
  {
    text: "ВА",
    code: "v_bus",
  },
  {
    text: "Г_ЛОДКА",
    code: "v_boat_st",
  },
  {
    text: "ТХ",
    code: "th",
  },
];

export const textToCode = (text) => {
  const lines = text.split('\n');

  const quotedText = lines.map((line) => `'${line.trim()}'`);

  let formattedText = [];

  quotedText.forEach((item) => {
    const splittedLine = item.split(": ");

    let replacedChar = splittedLine[0];

    characters.forEach((char) => {
      if (replacedChar === `'${char.text}`) {
        replacedChar = char.code;
      }
    });

    formattedText.push(`${replacedChar} '${splittedLine[1]}`);
  });

  return formattedText.join('\n');
};
