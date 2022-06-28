import Debug "mo:base/Debug"

actor DBank {
  var currentValue = 300;
  currentValue := 100;

   public func topUp(amount : Nat){
    currentValue += amount;
    Debug.print(debug_show(currentValue));
  };



public func withdraw (amount:Nat){
  currentValue -= amount;
  Debug.print(debug_show(currentValue));
};
  // topUp();
}