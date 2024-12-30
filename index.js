function pangsai(len) {
  const sai = "💩";

  if (typeof len !== "number") return sai;

  return new Array(len).fill(sai).join("");
}
