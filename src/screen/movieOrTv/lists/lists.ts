const nowYear = new Date().getFullYear();
const yearArr: number[] = [];
for (let i = 0; i < 15; i++) {
  yearArr.push(nowYear - i);
}
export const years = yearArr;
