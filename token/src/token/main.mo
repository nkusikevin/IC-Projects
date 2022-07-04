import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";

actor TOken {
    var owner:Principal = Principal.fromText("ks7zb-yewds-u5lw4-iergl-3mghk-g2ddp-cawaf-h37vs-dsiql-qkyaw-lae");
    var totalSupply:Nat = 1000000000;
    var symbol:Text = "DANK";


    var balances = HashMap.HashMap<Principal,Nat>(1,Principal.equal,Principal.hash);

    balances.put(owner,totalSupply);

    //get balance of owner
    public query func getbalance (who:Principal):async Nat {
       let balance : Nat = switch (balances.get(who)) {
          case null 0 ; 
          case (?result) result;
        };
        return balance;
    };


    public query func getSymbol ():async Text {
        return symbol;
    }
}