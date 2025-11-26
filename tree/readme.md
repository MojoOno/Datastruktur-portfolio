# Krav

Du skal lave to klasser: `Tree` og `Node`.

Tree skal egentlig kun indeholde en enkelt property, nemlig den Node der er root. Og de fleste metoder på Tree er blot delegates der kalder en lignende metode på Node.

Tree skal indeholde én property:

- `root` - som henviser til den Node der er root

Klassen skal som minimum have disse metoder:

- `dump()` eller `printTree()` - der udskriver hele træet i console.
- `addValue( value )` - der opretter en ny node med den givne value, og tilføjer den et sted i træet - du bestemmer selv hvor!
- `findValue( value )` - der leder efter den givne value i træet, og returnerer den (første) Node der har den
- `removeValue( value )` - der finder og fjerner Noden med den givne value fra træet

Node skal indeholde disse properties:

- `parent` - som henviser til denne node’s eneste parent
- `childNodes` - en liste over alle children denne node har
- `value` - som indeholder denne node’s *data*

Den skal som minimum have disse metoder:

- `firstChild()` - der returnerer den første i listen af childNodes
- `lastChild()` - der returnerer den sidste i listen af childNodes
- `hasChildNodes()` - der fortæller hvorvidt den har childNodes eller ej
- `appendChild( child )` - der tilføjer child til listen af children
- `removeChild( child )` - der fjerner child fra listen af children
- `replaceChild( newChild, oldChild )` - der fjerner oldChild fra listen, og tilføjer newChild på dens plads

For alle metoder gælder at de både skal opdatere parent og childNodes i alle berørte nodes.

Du bestemmer selv om du vil lave metoder uden parametre som metoder eller getter-properties.

# Anbefalet procedure

Start med at lave Node - og byg et træ op fra en global root. Lav tilsvarende en global dump() funktion der kan udskrive dit træ, og brug det under udviklingen.

Når din Node klasse er færdig, kan du flytte root og dump() ind i en Tree klasse, og tjekke at det stadig virker. Og først derefter lave de ekstra metoder i Tree.