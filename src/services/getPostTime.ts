const Months = [
  "Jan",
  "Fev",
  "Mar",
  "Abr",
  "Jun",
  "Jul",
  "Ago",
  "Set",
  "Out",
  "Nov",
  "Dec",
];

export const getPostTime = (seg: number) => {
  const now = Date.now();
  let x = now / 1000 - seg;
  let y;
  if (x / 3600 > 24) {
    const date = new Date(seg * 1000);
    x = date.getDate();
    y = " " + Months[date.getMonth()] + " " + date.getFullYear();
  }
  // se estiver entre 1h e 24h
  else if (x / 3600 <= 24 && x / 3600 >= 1) {
    x = x / 3600;
    y = "h";
  }
  // se estiver entre 1min e 60min
  else if (x / 60 <= 60 && x / 60 >= 1) {
    x = x / 60;
    y = "min";
  }
  // se estiver entre 1s e 60s
  else if (x <= 60 && x >= 1) {
    y = "s";
  }
  return `${Math.trunc(x)}${y}`;
};
