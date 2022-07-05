import Principal "mo:base/Principal";
import HashMap "mo:base/HashMap";
import Debug "mo:base/Debug";

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
    };

    public shared(msg) func payOut() : async Text{
        if(balances.get(msg.caller) == null){
        let amount = 10000;
        balances.put(msg.caller,amount);
        return "Success";
        }else{
        return "Already Claimed";
        }
    };

    public shared(msg) func transfer(to:Principal,amount:Nat): async Text{

        let fromBalace = await getbalance(msg.caller);
        if(fromBalace < amount){
            return "Insufficient Funds";
        }else{
            let newFromBalance : Nat = fromBalace - amount;
            balances.put(msg.caller,newFromBalance);

            let toBalance = await getbalance(to);
            let newToBalance : Nat = toBalance + amount;
            balances.put(to,newToBalance);

            return "Success";
        }
    }
}