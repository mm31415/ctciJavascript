const isRotation = (s1, s2) => {
  if (s1.length === s2.length && s1.length > 0) {
    return isSubstring(s1.concat(s1), s2);
  }
};
