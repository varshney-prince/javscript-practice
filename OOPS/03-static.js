// Static method concept
// Static methods class ke object ke bina directly class par call hote hain.
// Ye methods kisi specific object ke data par depend nahi hote.

class MathHelper {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log('Static add:', MathHelper.add(3, 5));
console.log('Static multiply:', MathHelper.multiply(4, 6));
