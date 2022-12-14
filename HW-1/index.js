const APPLES = 15.678;
const ORANGES = 123.965;
const BANANAS = 90.2345;
document.writeln("Завдання категорії Base", "<br />");

document.writeln(
  "Максимальне значення: ",
  Math.max(APPLES, ORANGES, BANANAS),
  ".",
  "<br />"
);

document.writeln(
  "Мінімальне значення: ",
  Math.min(APPLES, ORANGES, BANANAS),
  ".",
  "<br />"
);

const FRUITES_SUM = APPLES + ORANGES + BANANAS;
document.writeln("Сума всіх товарів: ", FRUITES_SUM, ".", "<br />");

document.writeln(
  "Сума всіх цілих вартостей: ",
  Math.floor(APPLES) + Math.floor(ORANGES) + Math.floor(BANANAS),
  ".",
  "<br />"
);

document.writeln(
  "Сума всіх товарів, заокруглена до сотень: ",
  Math.ceil(FRUITES_SUM / 100) * 100,
  ".",
  "<br />"
);

document.writeln(
  "Чи є ціла сума всіх вартостей парною: ",
  Math.floor(FRUITES_SUM) % 2 === 0,
  "<br />"
);

document.writeln(
  "Решта при покупці на 500 грн.: ",
  500 - FRUITES_SUM,
  ".",
  "<br />"
);

document.writeln("Середня ціна: ", (FRUITES_SUM / 3).toFixed(2), ".", "<br />");

const DISCOUNT = Math.random().toFixed(2);
document.writeln(
  "Сума до оплати: ",
  (FRUITES_SUM - FRUITES_SUM * DISCOUNT).toFixed(2),
  ", знижка складає: ",
  DISCOUNT * 100,
  "% - за умови покупки всіх трьох товарі",
  ".",
  "<br />"
);

let profit;
if (DISCOUNT > 0.5) {
  profit =
    "Втрачена вигода: " +
    (FRUITES_SUM * DISCOUNT - FRUITES_SUM / 2).toFixed(2) +
    "<br /><br />";
} else if (DISCOUNT < 0.5) {
  profit =
    "Прибуток склав: " +
    (FRUITES_SUM - FRUITES_SUM * DISCOUNT - FRUITES_SUM / 2).toFixed(2) +
    "<br /><br />";
} else {
  profit = "Товар продано по собівартості" + "<br /><br />";
}
document.writeln(profit);

document.writeln("Завдання категорії Advanced", "<br />");
document.writeln(`
    Максимальне значення: ${Math.max(APPLES, ORANGES, BANANAS)}.<br \/>
    Мінімальне значення: ${Math.min(APPLES, ORANGES, BANANAS)}.<br \/>
    Сума всіх товарів: ${FRUITES_SUM}.<br \/>
    Сума всіх цілих вартостей: ${
      Math.floor(APPLES) + Math.floor(ORANGES) + Math.floor(BANANAS)
    }.<br \/>
    Сума всіх товарів, заокруглена до сотень: ${
      Math.ceil(FRUITES_SUM / 100) * 100
    }.<br \/>
    Чи є ціла сума всіх вартостей парною: ${
      Math.floor(FRUITES_SUM) % 2 === 0
    }.<br \/>
    Здача при покупці на 500 грн.: ${500 - FRUITES_SUM}.<br \/>
    Середня ціна: ${(FRUITES_SUM / 3).toFixed(2)}.<br \/>
    Сума до оплати: ${(FRUITES_SUM - FRUITES_SUM * DISCOUNT).toFixed(2)}.<br \/>
    Знижка складає: ${
      DISCOUNT * 100
    }% - за умови покупки всіх трьох товарі.<br \/>
    ${profit}
`);
