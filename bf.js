function bf(s, i) {
  if (validate(s) == false) return "Invalid Code.";
  var l = 29999,m = new Array(l + 1),p = 0,r = "",q = [],j = 0,t = 0;
  s = s.replace(/[^+-\[\]<>.,]/, '');
  for(; j < 30000; j++) {m[j] = 0;}
  for (j=0;j<s.length;j++) {var c = s.charAt(j);
    if (c == '+') m[p] = m[p] == 254 ? 0 : m[p] + 1;
    if (c == '-') m[p] = m[p] == 0 ? 254 : m[p] - 1;
    if (c == '>') p = p == l ? 0 : p + 1;
    if (c == '<') p = p == 0 ? l : p - 1;
    if (c == '[') { 
      t = q.length; q.push(j);
      if (m[p] == 0)
        while (q.length > t) { j++;
          if (s.charAt(j) == '[') 
            q.push(j);
          if (s.charAt(j) == ']')
            q.pop();
        }
    }
    if (c == ']') j = q.pop() - 1;
    if (c == '.') r += String.fromCharCode(m[p]);
    if (c == ',') {
      m[p] = i.length > 0 ? i.charCodeAt() : 0;
      i = i.substring(1, i.length);
    }
  }
  return r;
}

function validate(s) {
  var b = 0;
  for (var i = 0; i < s.length; i++) {
    if (s.charAt(i) == '[') b++;
    if (s.charAt(i) == ']') b--;
    if (b < 0) return false;
  }
  return true;
}