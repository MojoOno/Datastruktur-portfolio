# Krav

💡
Husk at det ikke giver mening blot at kode metoderne én ad gangen i alfabetisk rækkefølge!

Følg [Guide til implementering af linkede lister](https://www.notion.so/Guide-til-implementering-af-linkede-lister-29b1d7fec09780b2b960dd14b01aba8c?pvs=21) ← du skal 


- Du skal lave én klasse,`DoublyLinkedList`, der kan importeres af andre moduler.
    
    Hver node i din liste skal indeholde tre pointere: next der peger mod den næste node, prev (forkortelse for previous) der peger på den foregående, og data der peger på det data-objekt som denne node indeholder.
    
    Du betemmer selv om du vil lave en `Node` klasse, eller blot lave nodes som anynome objekter.
    
- Din DoublyLinkedList klasse skal indeholde disse properties der er tilgængelige udefra:
    - `head` - henviser til den første node i listen
    - `tail` - henviser til den sidste node i listen
    
    Du må gerne tilføje ekstra properties hvis der er flere ting der giver mening at huske, men du må ikke bruge yderligere datastrukturer - så altså kun ‘primitives’.
    
- `constructor` behøver ikke kunne modtage noget, men skal bare initialisere en tom liste
- Du skal have en enkelt “afprøvnings”-metode:
    - `printList()` - der udskriver hele den linkede liste til konsollen, inklusive data og pointere
- Du skal have disse grundlæggende liste-metoder - de modtager og returnerer alle `data`-objekter og skjuler altså nodes for brugeren. Nogle af dem modtager også et index, som vil være det antal nodes frem i listen.
    - `addLast( data )` - tilføjer et element til slutningen af listen
    - `addFirst( data )` - tilføjer et element til begyndelsen af listen
    - `get( index )` - returnerer data på det pågældende index
    - `getFirst()` - returnerer data for den første node i listen
    - `getLast()` - returnerer data for den sidste node i listen (længst væk fra head)
    - `set( index, data )` - finder noden på det pågældende index, og erstatter dens data-pointer.
    - `insert( index, data )` - opretter en ny node og indsætter på det pågældende index - før den der allerede var der.
    - `insertAfter( index, data )` - indsætter et nyt element efter plads nummer *index*
    - `insertBefore( index, data )` - indsætter et nyt element før plads nummer *index*
        

        👉
        
        NB: Undlad bare at tælle index op eller ned - find smarte måder at indsætte et element henholdsvis før og efter et andet element du har fundet.
        

        
    - `remove( index )` - finder noden på det pågældende index, fjerner den, og returnerer dens data
    - `removeFirst()` - fjerner den første node i listen, og returnerer dens data
    - `removeLast()` - fjerner den sidste node i listen og returnerer dens data
    - `size()` - returnerer antallet af nodes i listen
    - `clear()` - fjerner alle nodes, så listen er tom
- Derudover skal du have metoder der modtager og returnerer `node`-objekter, og altså eksponerer listens indre. Forvent at nodes altid kommer fra listen: du skal altså ikke oprette nye node-objekter og give som argumenter, men altid have modtaget en returværdi fra tidligere.
    - `makeLast( node )` - flytter den pågældende node til slutningen af listen
    - `makeFirst( node )` - flytter den pågældende node til starten af listen
    - `getNode( index )` - finder og returnerer noden på det pågældende index
    - `getFirstNode()` - returnerer den første node i listen
    - `getLastNode()` - returnerer den sidste node i listen
    - `getNextNode( node )` - returnerer noden umiddelbart efter den modtagne (eller `null`, hvis det var den sidste)
    - `getPreviousNode( node )` - returnerer noden før den modtagne (eller `null`, hvis det var den første)
    - `insertBeforeNode( node, data )` - opretter en ny node med link til data-objektet, og indsætter den i listen *før* den eksisterende node.
    - `insertAfterNode( node, data )` - opretter en ny node med link til data-objektet, og indsætter den i listen *efter* den eksisterende node.
    - `removeNode( node )` - fjerner den pågældende node fra listen
    - `swap( nodeA, nodeB )` - bytter om på de to nodes’ pladser i listen.

Der er mange metoder, men du vil opdage at flere af dem giver rig mulighed for at bruge hinanden - så ofte vil du kunne nøjes med at kode en metode som et kald til en anden, måske to andre for først at få en værdi, og så gøre noget ved den. Så brug tid på at planlægge arbejdet med operationerne - det vil tjene sig hjem!