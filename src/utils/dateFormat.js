export default function dateFormat() {
  const New = new Date();
  const Year = New.getFullYear();
  let month = New.getMonth() + 1;
  let day = New.getDate();
  let hour = New.getHours();
  let min = New.getMinutes();
  let sec = New.getSeconds();

  let Items = [month, day, hour, min, sec];
  Items = Items.map((v) => {
    if (parseInt(v) < 10) {
      v = '0' + v.toString();
      return v;
    } else {
      return v;
    }
  });
  const result = Year + '.' + Items[0] + '.' + Items[1] + ' ' + Items[2] + ':' + Items[3] + ':' + Items[4];

  return result;
}
