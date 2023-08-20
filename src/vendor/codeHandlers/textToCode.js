const characters = [
  {
    text: "АГ",
    code: "blpi_ag",
  },
  {
    text: "УВ",
    code: "uv",
  },
  {
    text: "УС",
    code: "blpi_us",
  },
  {
    text: "МИ",
    code: "blpi_mi",
  },
  {
    text: "СЛ",
    code: "blpi_sl",
  },
  {
    text: "ДВ",
    code: "blpi_dv",
  },
  {
    text: "МТ",
    code: "mt",
  },
  {
    text: "УН",
    code: "blpi_un",
  },
  {
    text: "КС",
    code: "cs",
  },
  {
    text: "ГГ",
    code: "blpi_s",
  },
  {
    text: "НН",
    code: "blpi_nn",
  },
  {
    text: "КР",
    code: "blpi_kr",
  },
  {
    text: "ОП",
    code: "blpi_op",
  },
  {
    text: "СТ",
    code: "blpi_st",
  },
  {
    text: "РТ",
    code: "blpi_rt",
  },
  {
    text: "КТ",
    code: "blpi_kt",
  },
  {
    text: "ЗТ",
    code: "blpi_zt",
  },
  {
    text: "ХЗ",
    code: "blpi_hz",
  },
  {
    text: "ДН",
    code: "blpi_dn",
  },
  {
    text: "КЛ",
    code: "blpi_kl",
  },
  {
    text: "ЕВ",
    code: "blpi_ev",
  },
  {
    text: "ТИ",
    code: "blpi_ti",
  },
  {
    text: "АН",
    code: "blpi_an",
  },
  {
    text: "АЛ",
    code: "blpi_al",
  },
  {
    text: "АМ",
    code: "blpi_am",
  },
  {
    text: "ВЛ",
    code: "blpi_vl",
  },
  {
    text: "НД",
    code: "blpi_nd",
  },
  {
    text: "Г_КОМА",
    code: "blpi_v_koma",
  },
  {
    text: "ВА",
    code: "blpi_v_bus",
  },
  {
    text: "Г_ЛОДКА",
    code: "blpi_v_boat_st",
  },
  {
    text: "ТХ",
    code: "th",
  },
];

export const textToCode = (label, text) => {
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

    if (splittedLine[1]) {
      formattedText.push(`  ${replacedChar} '${splittedLine[1]}`);
    } else {
      formattedText.push(`  ${splittedLine[0]}`);
    }
  });

  const formattedCode = formattedText.join('\n');

  return `label ${label}: \n${formattedCode}`;
};
