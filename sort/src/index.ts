import { NumbersCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([10, 3, 17, -15, -8, 0, 12]);
numbersCollection.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharacterCollection("aAxXgtwertuiop");
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(22);
linkedList.add(-1);
linkedList.add(40);

linkedList.sort();
linkedList.print();
