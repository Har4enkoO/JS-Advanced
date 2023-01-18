const getSymbol = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const sign = Date.now().toString().slice(-5);
      resolve(String.fromCharCode(sign));
    }, 50);
  });
};

const getRandomChinese = async (length) => {
  let chineseStr = "";
  let i = 0;
  while (i < length) {
    chineseStr += await getSymbol(length);
    i++;
  }
  return chineseStr;
};

getRandomChinese(4).then((result) => {
  console.log(result);
});
