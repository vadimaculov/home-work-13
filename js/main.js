function calculateDiscriminant(a,b,c) {
  return (b*b) + 4*a*c;
  var d = calculateDiscriminant;
  var x;
  if (d < 0) {
    alert("Нет действительных корней")
  } else if (d = 0) {
    x = function() {
        return b/(2*a);
    }
  } else if (d > 0) {
      return x = function() {
        //* хз, как ее тут написать *//    
      }
  }
}